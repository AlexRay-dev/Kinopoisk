import { useContext } from "react";
import MainContentContext from "../../../context/context";

const ResetFilters = () => {
  const { mainContentData } = useContext(MainContentContext);
  const { sortingType, setSortingType } = mainContentData;

  function clickHandler() {
    setSortingType({
      ...sortingType,
      byPopular: "POPULAR_DESCENDING",
      byYear: "ALL",
      byUserFavorite: "ALL",
      genres: [],
    });
  }

  return (
    <button className="filter__reset" onClick={clickHandler}>
      Сбросить все фильтры
    </button>
  );
};

export default ResetFilters;
