import { useContext } from "react";
import MainContentContext from "../../context/context";

const Pagination = () => {
  const { mainContentData } = useContext(MainContentContext);
  const { nextPage, prevPage, page, totalPages } = mainContentData;

  return (
    <div className="pagination">
      <div className="pagination__buttons">
        <button className="pagination__btn" onClick={prevPage}>
          Назад
        </button>
        <button className="pagination__btn" onClick={nextPage}>
          Вперёд
        </button>
      </div>

      <div className="pagination__pages">
        {page} из {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
