import { Box, Heading, Image } from "@chakra-ui/react";
import bg from "../assets/bg.jpg";
import SearchInput from "../components/SearchInput";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Box width={"40%"}>
        <Navbar />
      </Box>
      <Box height={"100vh"} paddingLeft={"60px"}>
        <Image src={bg} position="absolute" right={0} top={0} zIndex={-10} />
        <Heading fontWeight={600} fontSize="32px" marginTop={20}>
          Be the chef of your kitchen
        </Heading>
        <SearchInput />
      </Box>
    </>
  );
};

export default Home;
