import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { meal } from "../entities/meal";

const useRecipes = () => {
  return useQuery({
    queryKey: ["meals"],
    queryFn: () => {
      return apiClient
        .get<{meals: meal[]}>("filter.php", {
          params: {
            a: "Canadian",
          },
        })
        .then((res) => res.data.meals)
    },
  });
};

export default useRecipes;
