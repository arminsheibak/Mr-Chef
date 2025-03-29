import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <HStack
      paddingY="6px"
      paddingX="45px"
      justifyContent={"space-between"}
    >
      <Link to={"/"}>
        <Image src={logo} height={"60px"} />
      </Link>
      <HStack spaceX={5} marginTop={3}>
        <Link to={"/"}>Recipes</Link>
        <Link to={"/"}>Trending</Link>
        <Link to={"/"}>Favorites</Link>
        <Link to={"/"}>About Us</Link>
      </HStack>
    </HStack>
  );
};

export default Navbar;
