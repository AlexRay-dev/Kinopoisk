import { FC, useContext } from "react";
import MainContentContext from "../../../../context/context";

const SelectorsByYear: FC = () => {
  const { mainContentData } = useContext(MainContentContext);
  const { sortingType, setSortingType } = mainContentData;

  // @ts-ignore
  function handleChangeByYears(event) {
    setSortingType({
      ...sortingType,
      byYear: event.target.value,
    });
  }

  return (
    <div className="filter__item">
      <div className="filter__item-title">Год релиза:</div>

      <select onChange={(event) => handleChangeByYears(event)}>
        <option value="ALL">Все года</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
      </select>
    </div>
  );
};

export default SelectorsByYear;
