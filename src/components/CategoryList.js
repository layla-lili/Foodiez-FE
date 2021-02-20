import { ListWrapper, Title } from "../styles";
import CategoryItem from "./CategoryItem";
import AddButton from "./buttons/AddButton";

import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const CategoryList = ({ categories }) => {
  const [query, setQuery] = useState("");
  const loading = useSelector((state) => state.loading);
  if (loading) return <Loading />;

  const categoryList = categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} key={category.id} />);
  return (
    <div>
      <AddButton />

      <SearchBar setQuery={setQuery} />
      <Title>Categories</Title>
      <ListWrapper>{categoryList}</ListWrapper>
    </div>
  );
};

export default CategoryList;
