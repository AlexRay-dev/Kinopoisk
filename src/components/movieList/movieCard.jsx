import BookmarkIcon from "./assets/bookmarkIcon";
import FavoriteIcon from "./assets/favoriteIcon";
import { Link } from "react-router-dom";
import imageUrl from "../../settings";

const MovieCard = ({ title, rating, imagePath, id }) => {
  return (
    <li className="list__item">
      <img className="list__item-img" src={imageUrl + imagePath} alt={title} />

      <div className="list__item-content">
        <div className="list__item-wrapper">
          <div className="list__item-header">
            <div className="list__item-rating">Рейтинг: {rating}</div>
            <div className="list__item-icons">
              <div className="list__item-icon">
                <BookmarkIcon id={id} />
              </div>
              <div className="list__item-icon">
                <FavoriteIcon id={id} />
              </div>
            </div>
          </div>

          <div className="list__item-title">{title}</div>
        </div>
        <Link to={"/film/" + id} className="list__item-btn">
          Подробнее
        </Link>
      </div>
    </li>
  );
};

export default MovieCard;
