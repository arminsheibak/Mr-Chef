import { Box } from "@chakra-ui/react";
import { IoHeartOutline } from "react-icons/io5";
import { meal } from "../entities/meal";
import { useSavedMealStore } from "../store";

interface Props {
  meal: meal;
}

const Like = ({ meal }: Props) => {
  const addMeal = useSavedMealStore((s) => s.addMeal);
  return (
    <Box onClick={() => addMeal(meal)}>
      <IoHeartOutline size={28} />
    </Box>
  );
};

export default Like;
