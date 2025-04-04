import { SimpleGrid, Card, Heading, Image, Box, Show } from "@chakra-ui/react";
import colorPalette from "../theme";
import { meal } from "../entities/meal";
import { useNavigate } from "react-router-dom";
import Like from "./Like";
import Dislike from "./Dislike";
import { useSavedMealStore } from "../store";

interface Props {
  meals: meal[];
}

const RecipesGrid = ({ meals }: Props) => {
  const navigate = useNavigate();
  const savedMeals = useSavedMealStore((s) => s.savedMeals);

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      paddingX={{ base: "20px", md: "45px" }}
      gapX={6}
    >
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
          marginX={"auto"}
        >
          <Image
            src={meal.strMealThumb}
            maxHeight={"80%"}
            onClick={() => navigate(`/recipes/${meal.idMeal}`)}
          />
          <Heading
            as={"h3"}
            paddingX={3}
            paddingY={2}
            onClick={() => navigate(`/recipes/${meal.idMeal}`)}
          >
            {meal.strMeal}
          </Heading>
          <Box position={"absolute"} top={"285px"} right={"15px"}>
            <Like meal={meal} />
          </Box>
          <Show
            when={
              savedMeals.filter((saveMeal) => saveMeal.idMeal === meal.idMeal)
                .length > 0
            }
          >
            <Box position={"absolute"} top={"285px"} right={"15px"}>
              <Dislike meal={meal} />
            </Box>
          </Show>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
};

export default RecipesGrid;
