import { Group, Input, Button } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import colorPalette from "../theme";
import useRecipeQueryStore from "../store";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const SearchInput = () => {
  const setSearch = useRecipeQueryStore((s) => s.setSearch);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <Group width={"100%"} attached marginTop={4}>
      <Input
        borderRadius={20}
        placeholder="let's cook"
        focusRing="none"
        focusRingColor="green.100"
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearch(inputRef.current?.value || "");
            navigate("/recipes/search");
            if (inputRef.current) inputRef.current.value = "";
          }
        }}
      />
      <Button
        borderRadius={20}
        backgroundColor={colorPalette.primary[500]}
        onClick={() => {
          setSearch(inputRef.current?.value || "");
          navigate("/recipes/search");
          if (inputRef.current) inputRef.current.value = "";
        }}
      >
        <IoSearchOutline color="#000" />
      </Button>
    </Group>
  );
};

export default SearchInput;
