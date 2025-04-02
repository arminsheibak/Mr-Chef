import { Card, Heading, HStack, Image, Show, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import useRecipes from "../hooks/useRecipes";
import colorPalette from "../theme";
import CategorySelector from "../components/CategorySelector";
import AreaSelector from "../components/AreaSelector";
import useRecipeQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const { data: meals } = useRecipes();
  const recipeQuery = useRecipeQueryStore(s => s.recipeQuery)
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <Heading marginLeft={{base: "20px", md: "45px"}} marginTop={6} fontSize={"32px"} >Meals</Heading>
      <Show when={!recipeQuery.s}>
        <HStack width={"310px"} >
          <CategorySelector />
          <AreaSelector />
        </HStack>
      </Show>
      <SimpleGrid columns={{base: 1, md:2, lg:3, xl: 4}}  paddingX={{base: "20px", md: "45px"}} gapX={6} >
        {meals?.map((meal) => (
          <Card.Root
            borderRadius={10}
            shadow={"sm"}
            overflow="hidden"
            _hover={{
              transform: "scale(1.03)",
              transition: "transform 0.15s ease-in",
            }}
            height={"345px"}
            width={"100%"}
            borderColor={colorPalette.primary[300]}
            key={meal.idMeal}
            bg={colorPalette.primary[100]}
            marginY={3}
            marginX={'auto'}
            onClick={() => navigate(`/recipes/${meal.idMeal}`)}
          >
            <Image src={meal.strMealThumb} maxHeight={"80%"} />
            <Heading as={"h3"} paddingX={3} paddingY={2} >{meal.strMeal}</Heading>
          </Card.Root>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Recipes;
