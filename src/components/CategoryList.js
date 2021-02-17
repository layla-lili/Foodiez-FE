import { ListWrapper } from "../styles";
import CategoryItem from "./CategoryItem";

import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const CategoryList = ({ categories }) => {
  const [query, setQuery] = useState("");
  // const loading = useSelector((state) => state.loading);
  // if (loading) return <Loading />;
  const categoryList = categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} key={category.id} />);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {categoryList}
    </div>
  );
};

export default CategoryList;