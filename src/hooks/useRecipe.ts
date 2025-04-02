import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { mealRecipe } from "../entities/meal";

const useRecipe = (idMeal: string) => {
  return useQuery({
    queryKey: ["recipe", idMeal],
    queryFn: () => {
      return apiClient.get<{meals: mealRecipe[]}>("lookup.php", {
        params: {
          i: idMeal,
        },
      }).then(res => res.data.meals[0]);
    },
  });
};

export default useRecipe;
