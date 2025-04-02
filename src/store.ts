import { create } from "zustand";

interface RecipeQuery {
  a?: string;
  c?: string;
}

interface RecipeQueryStore {
  recipeQuery: RecipeQuery;
  setArea: (a: string) => void;
  setCategory: (c: string) => void;
}

const useRecipeQueryStore = create<RecipeQueryStore>((set) => ({
  recipeQuery: { a: "Canadian"},
  setArea: (a) => set(store => ({ recipeQuery: { a: a , c: store.recipeQuery.c} })),
  setCategory: (c) => set(store => ({ recipeQuery: { c: c , a: store.recipeQuery.a} })),
}));

export default useRecipeQueryStore;
