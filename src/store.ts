import { create } from "zustand";
import { meal } from "./entities/meal";
import { persist } from "zustand/middleware";

interface RecipeQuery {
  a?: string;
  c?: string;
  s?: string;
}

interface RecipeQueryStore {
  recipeQuery: RecipeQuery;
  setArea: (a: string) => void;
  setCategory: (c: string) => void;
  setSearch: (s: string) => void;
}

const useRecipeQueryStore = create<RecipeQueryStore>((set) => ({
  recipeQuery: { c: "Beef" },
  setArea: (a) => set(() => ({ recipeQuery: { a: a } })),
  setCategory: (c) => set(() => ({ recipeQuery: { c: c } })),
  setSearch: (s) => set(() => ({ recipeQuery: { s: s } })),
}));

interface saveMealStore {
  savedMeals: meal[];
  addMeal: (meal: meal) => void;
  removeMeal: (mealId: string) => void;
}

export const useSavedMealStore = create<saveMealStore>()(
  persist(
    (set) => ({
      savedMeals: [],
      addMeal: (meal) =>
        set((state) => ({
          savedMeals: [...state.savedMeals, meal],
        })),
      removeMeal: (mealId: string) =>
        set((state) => ({
          savedMeals: state.savedMeals.filter((meal) => meal.idMeal != mealId),
        })),
    }),
    {
      name: "savedMeals",
    }
  )
);

export default useRecipeQueryStore;
