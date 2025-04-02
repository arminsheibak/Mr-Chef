import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { meal } from "../entities/meal";
import useRecipeQueryStore from "../store";

const useRecipes = () => {
  const recipeQuery = useRecipeQueryStore(s => s.recipeQuery)

  return useQuery({
    queryKey: ["meals", recipeQuery],
    queryFn: () => {
      return apiClient
        .get<{meals: meal[]}>("filter.php", {
          params: {
            a: recipeQuery.a,
            c: recipeQuery.c,
          },
        })
        .then((res) => res.data.meals)
    },
  });
};

export default useRecipes;
