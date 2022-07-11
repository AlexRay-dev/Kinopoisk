import Filters from "./filters/filters";
import Pagination from "./pagination";

const LeftMenu = () => {
  return (
    <aside className="menu">
      <Filters />
      <Pagination />
    </aside>
  );
};

export default LeftMenu;
