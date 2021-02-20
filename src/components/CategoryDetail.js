import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { DetailWrapper } from "../styles";
import IngredientList from "./IngredientList";
import AddButton from "./buttons/AddButton";
import IngredientDetail from "./IngredientDetail";

const CategoryDetail = () => {
  const categorySlug = useParams().categorySlug;

  // const allIngredients = useSelector(
  //   (state) => state.ingredientReducer.ingredients
  // );

  const category = useSelector((state) => {
    return state.categoryReducer.categories.find(
      (category) => category.slug === categorySlug
    );
  });

  // const ingredients = category.ingredients.map((ingredient) =>
  //   allIngredients.find((_ingredient) => _ingredient.id === ingredient.id)
  // );

  if (!category) return <Redirect to="/categories" />;
  console.log(
    "🚀 ~ file: CategoryDetail.js ~ line 31 ~ CategoryDetail ~ !category",
    !category
  );

  return (
    <>
      <DetailWrapper>
        <Helmet>
          <title>{category.name}</title>
        </Helmet>
        <Link to="/categories">Back to Categories</Link>
        <h1>{category.name}</h1>
        <img src={category.image} alt={category.name} />
        <p>{category.description}</p>
      </DetailWrapper>

      <IngredientList
        category={category}
        categoryId={category.id}
      ></IngredientList>
    </>
  );
};

export default CategoryDetail;
