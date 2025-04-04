import { useParams } from "react-router-dom";
import useRecipe from "../hooks/useRecipe";
import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  HStack,
  Flex,
  VStack,
  Show,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { BiCategory, BiWorld } from "react-icons/bi";
import IngredientTable from "../components/IngredientTable";
import Like from "../components/Like";
import Dislike from "../components/Dislike";
import { useSavedMealStore } from "../store";

const RecipeDetail = () => {
  const { slug } = useParams();
  const { data: meal } = useRecipe(slug!);
  const savedMeals = useSavedMealStore((s) => s.savedMeals);

  return (
    <>
      <Navbar />
      <Box paddingX={{ base: "24px", md: "45px" }} marginTop={8}>
        <SimpleGrid
          gridTemplateColumns={{
            base: "1fr 1fr",
            md: "40% 60%",
            lg: "25% 75%",
          }}
          gap={5}
        >
          <VStack>
            <Image src={meal?.strMealThumb} borderRadius={15} shadow={"xl"} />
            <Box hideBelow="md" width={"100%"} marginY={5}>
              <IngredientTable meal={meal!} />
            </Box>
          </VStack>
          <Box>
            <Heading fontSize={{ base: "24px", md: "32px" }}>
              {meal?.strMeal}
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={{ base: 1, md: 3 }}
              marginTop={1}
              fontWeight={500}
              fontSize={"18px"}
            >
              <HStack gap={1}>
                <BiCategory />
                <Text>{meal?.strCategory}</Text>
              </HStack>
              <HStack gap={1}>
                <BiWorld />
                <Text>{meal?.strArea}</Text>
              </HStack>
              <Box position={"relative"} >
                <Like meal={meal!} />
              <Show
                when={
                  savedMeals.filter(
                    (saveMeal) => saveMeal.idMeal === meal?.idMeal
                  ).length > 0
                }
              >
                <Box position={"absolute"} top={0} left={0} >
                  <Dislike meal={meal!} />
                </Box>
              </Show>
              </Box>
            </Flex>
            <Box hideBelow="md" marginTop={8} paddingX={"10px"}>
              <Text>Instructions: </Text>
              <Text marginTop={3} textAlign={"justify"}>
                {meal?.strInstructions}
              </Text>
              <Box hideBelow={"lg"} marginY={10}>
                <iframe
                  width="100%"
                  height="550px"
                  src={`https://www.youtube.com/embed/${
                    meal?.strYoutube.split("?v=")[1]
                  }`}
                ></iframe>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
        <Box hideFrom={"md"} marginTop={5} width={{ base: "100%", lg: "40%" }}>
          <IngredientTable meal={meal!} />
          <Box marginTop={8} paddingX={"10px"}>
            <Text>Instructions: </Text>
            <Text marginTop={3} textAlign={"justify"}>
              {meal?.strInstructions}
            </Text>
          </Box>
        </Box>
        <Box
          marginY={10}
          hideFrom={"lg"}
          height={{ base: "250px", md: "450px" }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${
              meal?.strYoutube.split("?v=")[1]
            }`}
          ></iframe>
        </Box>
      </Box>
    </>
  );
};

export default RecipeDetail;
