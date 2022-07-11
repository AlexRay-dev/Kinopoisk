import { movieListData } from "../../../data/movieListData";
import { getYear } from "date-fns";

const sorting = (sortingType) => {
  const intersect = function (arr1, arr2) {
    return arr1.filter(function (n) {
      return arr2.indexOf(n) !== -1;
    });
  };

  function compare(field) {
    return (a, b) => (a[field] < b[field] ? 1 : -1);
  }

  function sortByPopularity() {
    const defaultSort = [...movieListData].sort(compare("popularity"));

    switch (sortingType.byPopular) {
      case "POPULAR_DESCENDING":
        return [...movieListData].sort(compare("popularity"));
      case "POPULAR_ASCENDING":
        return [...movieListData].sort(compare("popularity")).reverse();
      case "RATING_DESCENDING":
        return [...movieListData].sort(compare("vote_average"));
      case "RATING_ASCENDING":
        return [...movieListData].sort(compare("vote_average")).reverse();
      default:
        return defaultSort;
    }
  }

  function filterByYear() {
    const movieList = sortByPopularity();
    const sortByYearType = sortingType.byYear;

    if (sortByYearType === "ALL") return movieList;

    return movieList.filter((movie) => {
      const date = getYear(new Date(movie.release_date));

      if (sortByYearType === String(date)) return movie;
    });
  }
  function filterByGenre() {
    const movieList = filterByYear();
    const genreList = sortingType.genres;
    const isEmpty = genreList.length === 0;
    if (isEmpty) return movieList;

    return movieList.filter((item) => {
      const itemGenres = item.genre_ids;
      if (intersect(genreList, itemGenres).length > 0) return item;
    });
  }

  function filterByUserFavorite() {
    const movieList = filterByGenre();

    // if (loginStatus) {
    const userWatchLaterList = sortingType.userWatchLaterStore;
    const userFavoriteList = sortingType.userFavoriteStore;

    switch (sortingType.byUserFavorite) {
      case "ALL":
        return movieList;
      case "WATCH_LATER":
        return [...movieList].filter((item) => {
          const itemId = item.id;

          if (userWatchLaterList.includes(itemId)) return item;
        });
      case "FAVORITES":
        return [...movieList].filter((item) => {
          const itemId = item.id;
          if (userFavoriteList.includes(itemId)) return item;
        });
      default:
        return movieList;
    }
    // } else {
    //   return movieList;
    // }
  }
  return filterByUserFavorite();
};

export default sorting;
