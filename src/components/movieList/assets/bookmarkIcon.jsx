import { useContext, useState } from "react";
import MainContentContext from "../../../context/context";

const BookmarkIcon = ({ id }) => {
  const { mainContentData } = useContext(MainContentContext);
  const { sortingType, setSortingType } = mainContentData;
  const [isSelected, setSelected] = useState("none");

  function addToWatchLater() {
    setSortingType({
      ...sortingType,
      userWatchLaterStore: [...sortingType.userWatchLaterStore, id],
    });
  }

  function removeFromWatchLater() {
    setSortingType({
      ...sortingType,
      userWatchLaterStore: [...sortingType.userWatchLaterStore].filter(
        (item) => item !== id
      ),
    });
  }

  function clickHandler() {
    if (isSelected === "none") {
      setSelected("fill");
      addToWatchLater();
    } else {
      setSelected("none");
      removeFromWatchLater();
    }
  }

  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill={isSelected}
      xmlns="http://www.w3.org/2000/svg"
      onClick={clickHandler}
    >
      <path
        d="M5 22V3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V22L12 15.8889L5 22Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default BookmarkIcon;
