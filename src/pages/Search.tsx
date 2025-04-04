import { Heading, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import useRecipes from "../hooks/useRecipes"
import RecipesGrid from "../components/RecipesGrid"

const Search = () => {
  const {data: meals} = useRecipes()
  return (
    <>
      <Navbar />
      <Heading
        marginLeft={{ base: "20px", md: "45px" }}
        marginTop={6}
        marginBottom={4}
        fontSize={"32px"}
      >
        Results:
      </Heading>
      {!meals && <Text textAlign={"center"} marginTop={20} fontSize={"18px"} fontWeight={600} >No Item Matched!</Text>}
      <RecipesGrid meals={meals!} />
    </>
  )
}

export default Search