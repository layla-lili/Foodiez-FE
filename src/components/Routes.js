import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import Home from "./Home";
import CategoryList from "./CategoryList";
import CategoryDetail from "./CategoryDetail";
import CategoryForm from "./CategoryForm";
import IngredientList from "./IngredientList";
import IngredientDetail from "./IngredientDetail";
import IngredientForm from "./IngredientForm";
const Routes = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const ingredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );
  return (
    <Switch>
      <Route path={"/categories/:categoryId/ingredients/create"}>
        <IngredientForm />
      </Route>

      <Route path={"/categories/create"}>
        <CategoryForm />
      </Route>

      <Route path="/categories/:categorySlug">
        <CategoryDetail />
      </Route>

      <Route path="/ingredients/:ingredientSlug">
        <IngredientDetail />
      </Route>

      <Route path="/categories">
        <CategoryList categories={categories} />
      </Route>

      <Route path="/ingredients">
        <IngredientList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
