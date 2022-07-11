import MovieCard from "./movieCard";
import MainContentContext from "../../context/context";
import sorting from "./utils/sorting";
import { useContext } from "react";

const MovieList = () => {
  const { mainContentData } = useContext(MainContentContext);
  const { sortingType, firstContentIndex, lastContentIndex } = mainContentData;

  const sortedMovieList = sorting(sortingType);

  const render = sortedMovieList
    .slice(firstContentIndex, lastContentIndex)
    .map((film) => {
      const imagePath = film.poster_path || film.backdrop_path;

      return (
        <MovieCard
          key={film.id}
          title={film.title}
          rating={film.vote_average}
          imagePath={imagePath}
          id={film.id}
        />
      );
    });

  return <ul className="list">{render}</ul>;
};

export default MovieList;
