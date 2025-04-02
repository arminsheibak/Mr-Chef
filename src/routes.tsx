import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/recipes", element: <Recipes /> },
  { path: "/recipes/:slug", element: <RecipeDetail /> },
]);

export default router;
