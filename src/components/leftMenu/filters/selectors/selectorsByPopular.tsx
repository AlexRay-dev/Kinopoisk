import { FC, useContext } from "react";
import MainContentContext from "../../../../context/context";

const SelectorsByPopular: FC = () => {
  const { mainContentData } = useContext(MainContentContext);
  const { sortingType, setSortingType } = mainContentData;

  // @ts-ignore
  function handleChangePopularity(event) {
    setSortingType({
      ...sortingType,
      byPopular: event.target.value,
    });
  }

  return (
    <div className="filter__item">
      <div className="filter__item-title">Сортировать по:</div>

      <select onChange={(event) => handleChangePopularity(event)}>
        <option value="POPULAR_DESCENDING">Популярные по убыванию</option>
        <option value="POPULAR_ASCENDING">Популярные по возрастанию</option>
        <option value="RATING_DESCENDING">Рейтинг по убыванию</option>
        <option value="RATING_ASCENDING">Рейтинг по возрастанию</option>
      </select>
    </div>
  );
};

export default SelectorsByPopular;
