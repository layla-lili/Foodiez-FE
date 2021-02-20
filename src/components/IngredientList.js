import { useParams, Redirect, Link } from "react-router-dom";
import { ListWrapper, Title } from "../styles";
import IngredientItem from "./IngredientItem";
import { AddButtonStyled } from "../styles";
import AddButton from "./buttons/AddButton";

import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";

// import Loading from "./Loading";

const IngredientList = ({ categoryId }) => {
  console.log(
    "🚀 ~ file: IngredientList.js ~ line 15 ~ IngredientList ~ categoryId",
    categoryId
  );
  const [query, setQuery] = useState("");
  // const loading = useSelector((state) => state.ingredients.loading);
  // if (loading) return <Loading />;

  const ingredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );

  const categorySlug = useParams().categorySlug;
  // const allIngredients = useSelector(
  //   (state) => state.ingredientReducer.ingredients
  // );

  const category = useSelector((state) => {
    return state.categoryReducer.categories.find(
      (category) => category.slug === categorySlug
    );
  });

  const ingredientList = ingredients
    .filter((ingredient) => ingredient.categoryId === categoryId)
    .filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((ingredient) => (
      <IngredientItem ingredient={ingredient} key={ingredient.id} />
    ));
  console.log(
    "🚀 ~ file: IngredientList.js ~ line 42 ~ IngredientList ~ ingredients",
    ingredients
  );

  return (
    <div>
      <Link to={`/categories/${categoryId}/ingredients/create`}>
        <AddButtonStyled>Add ingredient</AddButtonStyled>
      </Link>

      <SearchBar setQuery={setQuery} />
      <Title>Ingredients</Title>
      <ListWrapper>{ingredientList}</ListWrapper>
    </div>
  );
};

export default IngredientList;
