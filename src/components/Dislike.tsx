import { Box } from "@chakra-ui/react";
import { IoHeartSharp } from "react-icons/io5";
import { useSavedMealStore } from "../store";
import { meal } from "../entities/meal";

interface Props {
  meal: meal;
}

const Dislike = ({ meal }: Props) => {
  const removeMeal = useSavedMealStore((s) => s.removeMeal);
  return (
    <Box onClick={() => removeMeal(meal.idMeal)}>
      <IoHeartSharp color="red" size={28} />
    </Box>
  );
};

export default Dislike;
