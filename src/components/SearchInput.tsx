import { Group, Input, Button } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <Group width={"46%"} attached marginTop={5}>
      <Input
        borderRadius={20}
        placeholder="let's cook"
        focusRing="none"
        focusRingColor="green.100"
      />
      <Button borderRadius={20} backgroundColor={"#7df703"}>
        <IoSearchOutline color="#000" />
      </Button>
    </Group>
  );
};

export default SearchInput;
