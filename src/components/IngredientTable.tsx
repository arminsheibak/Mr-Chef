import { Table } from "@chakra-ui/react";
import { mealRecipe } from "../entities/meal";

interface Props {
  meal: mealRecipe
}

const IngredientTable = ({meal}: Props) => {
  const Ingredients = [
    meal?.strIngredient1,
    meal?.strIngredient2,
    meal?.strIngredient3,
    meal?.strIngredient4,
    meal?.strIngredient5,
    meal?.strIngredient6,
    meal?.strIngredient7,
    meal?.strIngredient8,
    meal?.strIngredient9,
    meal?.strIngredient10,
    meal?.strIngredient11,
    meal?.strIngredient12,
    meal?.strIngredient13,
    meal?.strIngredient14,
    meal?.strIngredient15,
    meal?.strIngredient16,
    meal?.strIngredient17,
    meal?.strIngredient18,
    meal?.strIngredient19,
    meal?.strIngredient20,
  ];

  const Measures = [
    meal?.strMeasure1,
    meal?.strMeasure2,
    meal?.strMeasure3,
    meal?.strMeasure4,
    meal?.strMeasure5,
    meal?.strMeasure6,
    meal?.strMeasure7,
    meal?.strMeasure8,
    meal?.strMeasure9,
    meal?.strMeasure10,
    meal?.strMeasure11,
    meal?.strMeasure12,
    meal?.strMeasure13,
    meal?.strMeasure14,
    meal?.strMeasure15,
    meal?.strMeasure16,
    meal?.strMeasure17,
    meal?.strMeasure18,
    meal?.strMeasure19,
    meal?.strMeasure20,
  ];

  interface tableData {
    Ingredient?: string;
    measure?: string;
  }
  const tableData: tableData[] = Ingredients.map((Ingredient, index) => {
    if (Ingredient) {
      return {
        Ingredient: Ingredient,
        measure: Measures[index],
      };
    }
    return {};
  });
  return (
    <Table.Root variant={"outline"}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Ingredient</Table.ColumnHeader>
          <Table.ColumnHeader>Measure</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tableData.map((item) => {
          if (item.Ingredient) {
            return (
              <Table.Row key={item.Ingredient}>
                <Table.Cell>{item.Ingredient}</Table.Cell>
                <Table.Cell>{item.measure}</Table.Cell>
              </Table.Row>
            );
          }
        })}
      </Table.Body>
    </Table.Root>
  );
};

export default IngredientTable;
