import { create } from "zustand";

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
  recipeQuery: { c: "Beef"},
  setArea: (a) => set(() => ({ recipeQuery: { a: a } })),
  setCategory: (c) => set(() => ({ recipeQuery: { c: c} })),
  setSearch: (s) => set(() => ({ recipeQuery: {s: s}}))
}));

export default useRecipeQueryStore;
