import { useContext } from "react";
import MainContentContext from "../../../context/context";

const CategoryListItem = ({ title, id }) => {
  const { mainContentData } = useContext(MainContentContext);
  const { sortingType, setSortingType } = mainContentData;
  const genreList = [...sortingType.genres];

  function changeHandler(event) {
    const id = Number(event.target.value);
    const isGenreListIncludes = genreList.includes(id);

    if (isGenreListIncludes) {
      setSortingType({
        ...sortingType,
        genres: genreList.filter((item) => item !== id),
      });
    } else {
      genreList.push(id);
      setSortingType({ ...sortingType, genres: genreList });
    }
  }

  return (
    <li>
      <input
        type="checkbox"
        id={title}
        value={id}
        onChange={(event) => changeHandler(event)}
      />
      <label htmlFor={title}>{title}</label>
    </li>
  );
};

export default CategoryListItem;
