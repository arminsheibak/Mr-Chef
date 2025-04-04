import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/favorites";
import Search from "./pages/Search";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/recipes", element: <Recipes /> },
  { path: "/recipes/search", element: <Search /> },
  { path: "/recipes/:slug", element: <RecipeDetail /> },
  {path: "favorites/", element: <Favorites />},
]);

export default router;
