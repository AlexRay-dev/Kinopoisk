import { useParams } from "react-router-dom";
import { movieListData } from "../data/movieListData";
import imageUrl from "../settings";
import { getYear } from "date-fns";
import { categoryListData } from "../data/categoryListData";

const DetailsFilm = () => {
  const { id } = useParams();
  const film = movieListData.find((item) => item.id === Number(id));
  console.log(film);

  const getGenresList = (film) =>
    categoryListData.reduce(
      (acc, { name, id }) =>
        film.genre_ids.includes(id) ? [...acc, name] : acc,
      []
    );
  const genresList = getGenresList(film).join(", ");

  if (!film) return null;

  return (
    <>
      <div className="details">
        <div
          className="details__header"
          style={{ backgroundImage: `url(${imageUrl + film.backdrop_path})` }}
        >
          <div className="container details__header-wrapper">
            <div className="details__header-poster">
              <img src={imageUrl + film.poster_path} alt="" />
            </div>

            <div className="details__header-content">
              <h2 className="details__header-title">{film.title}</h2>
              <div className="details__header-text">
                <span>Рейтинг:</span> {film.vote_average}
              </div>
              <div className="details__header-text">
                <span>Год выхода:</span> {getYear(new Date(film.release_date))}
              </div>
              <div className="details__header-text">
                <span>Оригинальное название:</span> {film.original_title}
              </div>
              <div className="details__header-text">
                <span>Жанр:</span> {genresList}
              </div>
              <p className="details__header-text">{film.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsFilm;
