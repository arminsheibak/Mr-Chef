import {
  HStack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import colorPalette from "../theme";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <HStack
      paddingY="6px"
      paddingX={{ base: "15px", md: "45px" }}
      justifyContent={"space-between"}
      align={"center"}
      spaceX={3}
    >
      <Link to={"/"}>
        <Image src={logo} height={"60px"} />
      </Link>
      <SearchInput />
      <HStack hideBelow={"md"} marginTop={4} spaceX={1}>
        <FaArrowTrendUp size={32} color={colorPalette.primary[600]} />
        <Link to={"/favorites"}>
          <MdFavoriteBorder size={32} color="#eb3461" />
        </Link>
        <Link to={"https://github.com/arminsheibak"}>
          <IoIosInformationCircleOutline size={32} />
        </Link>
      </HStack>
      <NavbarMenu />
    </HStack>
  );
};

export default Navbar;
