import { Box, createListCollection, Select } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import { useMemo } from "react";
import useRecipeQueryStore from "../store";

const CategorySelector = () => {
  const { data: categories } = useCategories();
  const setCategory = useRecipeQueryStore((s) => s.setCategory);
  const recipeQuery = useRecipeQueryStore((s) => s.recipeQuery);

  const categoryCollection = useMemo(() => {
    return createListCollection({
      items:
        categories?.map((category) => ({
          label: category.strCategory,
          value: category.strCategory,
        })) || [],
    });
  }, [categories]);

  return (
    <Box
      width={"150px"}
      height={"40px"}
      marginLeft={{ base: "20px", md: "45px" }}
      marginY={4}
    >
      <Select.Root
        collection={categoryCollection}
        width={"150px"}
        size={"md"}
        zIndex={10}
        position={"absolute"}
        value={[recipeQuery.c || ""]}
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Category" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Select.Content>
          {categories?.map((category) => {
            return (
              <Select.Item
                key={category.strCategory}
                onClick={() => setCategory(category.strCategory)}
                item={category.strCategory}
              >
                {category.strCategory}
              </Select.Item>
            );
          })}
        </Select.Content>
      </Select.Root>
    </Box>
  );
};

export default CategorySelector;
