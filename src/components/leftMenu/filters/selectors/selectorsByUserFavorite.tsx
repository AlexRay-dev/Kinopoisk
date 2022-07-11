import { FC, useContext } from "react";
import MainContentContext from "../../../../context/context";

const SelectorsByFavorite: FC = () => {
  const { mainContentData } = useContext(MainContentContext);
  const { sortingType, setSortingType } = mainContentData;

  // @ts-ignore
  function handleChangeByUserList(event) {
    setSortingType({
      ...sortingType,
      byUserFavorite: event.target.value,
    });
  }

  return (
    <div className="filter__item">
      <div className="filter__item-title">Избранное</div>

      <select onChange={(event) => handleChangeByUserList(event)}>
        <option value="ALL">Не выбрано</option>
        <option value="WATCH_LATER">Смотреть позже</option>
        <option value="FAVORITES">Избранные</option>
      </select>
    </div>
  );
};

export default SelectorsByFavorite;
