import CategoryList from "./categoryList";
import SelectionList from "./selectors/selectionList";
import ResetFilters from "./resetFilters";

const Filters = () => {
  return (
    <>
      <div className="filter">
        <div className="filter__title">Фильтры</div>
        <ResetFilters />
        <SelectionList />
      </div>
      <CategoryList />
    </>
  );
};

export default Filters;
