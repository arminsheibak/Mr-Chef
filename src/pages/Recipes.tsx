import { Heading, HStack, Show } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import useRecipes from "../hooks/useRecipes";
import CategorySelector from "../components/CategorySelector";
import AreaSelector from "../components/AreaSelector";
import useRecipeQueryStore from "../store";
import RecipesGrid from "../components/RecipesGrid";
import { useEffect } from "react";

const Recipes = () => {
  const { data: meals } = useRecipes();
  const recipeQuery = useRecipeQueryStore((s) => s.recipeQuery);
  const setCategory = useRecipeQueryStore((s) => s.setCategory);

  useEffect(() => {
    setCategory("Beef");
  }, []);

  return (
    <>
      <Navbar />
      <Heading
        marginLeft={{ base: "20px", md: "45px" }}
        marginTop={6}
        fontSize={"32px"}
      >
        Meals
      </Heading>
      <Show when={!recipeQuery.s}>
        <HStack width={"310px"}>
          <CategorySelector />
          <AreaSelector />
        </HStack>
      </Show>
      <RecipesGrid meals={meals!} />
    </>
  );
};

export default Recipes;
