import { Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import RecipesGrid from "../components/RecipesGrid";
import { useSavedMealStore } from "../store";

const Favorites = () => {
  const savedMeals = useSavedMealStore(s => s.savedMeals)
  return (
    <>
      <Navbar />
      <Heading
        marginLeft={{ base: "20px", md: "45px" }}
        marginTop={6}
        marginBottom={4}
        fontSize={"32px"}
      >
        Favorites
      </Heading>
      {savedMeals.length === 0 && <Text textAlign={"center"} marginTop={20} fontSize={"18px"} fontWeight={600} >You Haven't Saved Any Item.</Text>}
      <RecipesGrid meals={savedMeals} />
    </>
  );
};

export default Favorites;
