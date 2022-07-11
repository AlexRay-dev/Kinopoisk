import { categoryListData } from "../../../data/categoryListData";
import CategoryListItem from "./categoryListItem";

const CategoryList = () => {
  const render = categoryListData.map((item) => {
    return <CategoryListItem key={item.id} title={item.name} id={item.id} />;
  });

  return <ul>{render}</ul>;
};

export default CategoryList;
