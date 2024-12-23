import { useContext } from "react";
import { FavoritesContext } from "@/features/characters/contexts/FavoritesCharactersContext";

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
}
