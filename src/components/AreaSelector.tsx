import { useMemo } from "react";
import useAreas from "../hooks/useAreas";
import { Box, createListCollection, Select } from "@chakra-ui/react";
import useRecipeQueryStore from "../store";

const AreaSelector = () => {
  const { data: areas } = useAreas();
  const setArea = useRecipeQueryStore((s) => s.setArea);
  const recipeQuery = useRecipeQueryStore((s) => s.recipeQuery);

  const areaCollection = useMemo(() => {
    return createListCollection({
      items:
        areas?.map((area) => ({
          label: area.strArea,
          value: area.strArea,
        })) || [],
    });
  }, [areas]);

  return (
    <Box
      width={"150px"}
      height={"40px"}
      marginLeft={{ base: "20px", md: "45px" }}
      marginY={4}
    >
      <Select.Root
        collection={areaCollection}
        width={"150px"}
        size={"md"}
        zIndex={10}
        position={"absolute"}
        value={[recipeQuery.a || ""]}
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Area" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Select.Content>
          {areas?.map((area) => {
            return (
              <Select.Item
                key={area.strArea}
                item={area.strArea}
                onClick={() => setArea(area.strArea)}
              >
                {area.strArea}
              </Select.Item>
            );
          })}
        </Select.Content>
      </Select.Root>
    </Box>
  );
};

export default AreaSelector;
