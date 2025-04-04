import { Box, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import bg from "../assets/bg.jpg";
import bgMobile from "../assets/bg-mobile.jpg";
import SearchInput from "../components/SearchInput";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import NavbarMenu from "../components/NavbarMenu";

const Home = () => {
  return (
    <>
      <HStack
        paddingY="6px"
        paddingX={{ base: "18px", md: "45px" }}
        justifyContent="space-between"
        width={{ md: "100%", lg: "50%" }}
      >
        <Link to={"/"}>
          <Image src={logo} height={"60px"} />
        </Link>
        <HStack hideBelow={"md"} gap={5} marginTop={3}>
          <Link to={"/recipes"}>Recipes</Link>
          <Link to={"/"}>Trending</Link>
          <Link to={"/favorites"}>Favorites</Link>
          <Link to={"https://github.com/arminsheibak"}>About Us</Link>
        </HStack>
        <Box></Box>
        <Box hideFrom={"md"}>
          <NavbarMenu />
        </Box>
      </HStack>
      <Box paddingLeft={{base: 0, md: "60px"}} >
        <Image
          hideBelow={"lg"}
          src={bg}
          position="absolute"
          right={0}
          top={0}
          zIndex={-10}
          height={"100vh"}
          objectFit={"cover"}
        />
        <Image
          hideFrom={"lg"}
          src={bgMobile}
          position="absolute"
          right={0}
          top={0}
          zIndex={-10}
          height={"100vh"}
          objectFit={"cover"}
        />
        <VStack align={{base: "center", md: "flex-start"}} >
          <Heading
            fontWeight={600}
            fontSize={{ base: "24px", md: "32px" }}
            marginTop={20}
          >
            Be the chef of your kitchen
          </Heading>
          <Box width={{ base: "85%", md: "60%", lg: "46%" }}>
            <SearchInput />
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
