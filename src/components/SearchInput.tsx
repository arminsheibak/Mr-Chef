import { Group, Input, Button } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import colorPalette from "../theme";

const SearchInput = () => {
  return (
    <Group width={"100%"} attached marginTop={4} >
      <Input
        borderRadius={20}
        placeholder="let's cook"
        focusRing="none"
        focusRingColor="green.100"
      />
      <Button borderRadius={20} backgroundColor={colorPalette.primary[500]}>
        <IoSearchOutline color="#000" />
      </Button>
    </Group>
  );
};

export default SearchInput;
