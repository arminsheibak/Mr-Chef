import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

interface Area {
  strArea: string;
}

const useAreas = () => {
  return useQuery({
    queryKey: ["areas"],
    queryFn: () => {
      return apiClient
        .get<{ meals: Area[] }>("list.php", {
          params: { a: "list" },
        })
        .then((res) => res.data.meals);
    },
  });
};

export default useAreas;
