import SelectorsByPopular from "./selectorsByPopular";
import SelectorsByYear from "./selectorsByYear";
import SelectorsByUserFavorite from "./selectorsByUserFavorite";
import { useSelector } from "react-redux";
import { FC } from "react";

const SelectionList: FC = () => {
  // @ts-ignore
  const loginStatus = useSelector((state) => state.isLoggedIn);

  return (
    <>
      <SelectorsByPopular />
      <SelectorsByYear />
      {loginStatus && <SelectorsByUserFavorite />}
    </>
  );
};

export default SelectionList;
