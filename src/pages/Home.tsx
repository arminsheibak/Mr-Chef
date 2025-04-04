import { Box, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import bg from "../assets/bg.jpg";
import SearchInput from "../components/SearchInput";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"


const Home = () => {
  return (
    <>
      <HStack
      paddingY="6px"
      paddingX="45px"
      justifyContent={"space-between"}
      width={"40%"}
    >
      <Link to={"/"}>
        <Image src={logo} height={"60px"} />
      </Link>
      <HStack spaceX={5} marginTop={3}>
        <Link to={"/recipes"}>Recipes</Link>
        <Link to={"/"}>Trending</Link>
        <Link to={"/"}>Favorites</Link>
        <Link to={"/"}>About Us</Link>
      </HStack>
    </HStack>
      <Box height={"100vh"} paddingLeft={"60px"}>
        <Image src={bg} position="absolute" right={0} top={0} zIndex={-10} />
        <Heading fontWeight={600} fontSize="32px" marginTop={20}>
          Be the chef of your kitchen
        </Heading>
        <Box width={"46%"} >
          <SearchInput />
        </Box>
        <VStack marginTop={10} width={"40%"} justify="center" >
        </VStack>
      </Box>
    </>
  );
};

export default Home;