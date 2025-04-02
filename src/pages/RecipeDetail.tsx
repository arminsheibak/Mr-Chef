import { useParams } from "react-router-dom";
import useRecipe from "../hooks/useRecipe";

const RecipeDetail = () => {
  const { slug } = useParams();
  const { data: meal } = useRecipe(slug!);

  return <h1>{meal?.idMeal}</h1>
};

export default RecipeDetail;
