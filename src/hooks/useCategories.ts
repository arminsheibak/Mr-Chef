import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

interface Category {
  strCategory: string;
}

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return apiClient
        .get<{ meals: Category[] }>("list.php", {
          params: { c: "list" },
        })
        .then((res) => res.data.meals)
    },
  });
};

export default useCategories;
