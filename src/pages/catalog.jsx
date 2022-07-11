import LeftMenu from "../components/leftMenu/leftMenu";
import MovieList from "../components/movieList/movieList";
import MainContentContext from "../context/context";
import { useState } from "react";
import { movieListData } from "../data/movieListData";
import usePagination from "../hooks/usePagination";

const Catalog = () => {
  const [sortingType, setSortingType] = useState({
    byPopular: "POPULAR_DESCENDING",
    byYear: "ALL",
    byUserFavorite: "ALL",
    userFavoriteStore: [],
    userWatchLaterStore: [],
    genres: [],
    movieCount: movieListData.length,
  });
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    totalPages,
  } = usePagination({
    contentPerPage: 6,
    count: sortingType.movieCount,
  });

  const mainContentData = {
    sortingType,
    setSortingType,
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    totalPages,
  };

  return (
    <>
      <MainContentContext.Provider value={{ mainContentData }}>
        <div className="content">
          <div className="container">
            <div className="content__inner">
              <LeftMenu />
              <MovieList />
            </div>
          </div>
        </div>
      </MainContentContext.Provider>
    </>
  );
};

export default Catalog;
