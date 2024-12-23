import { FavoritesProvider } from "@/features/characters/contexts/FavoritesContext";
import "../index.css";
import { PropsWithChildren, StrictMode } from "react";
import { FilterProvider } from "@/features/characters/contexts/FilterContext";

export function Providers({ children }: PropsWithChildren) {
  return (
    <StrictMode>
      <FilterProvider>
        <FavoritesProvider>{children}</FavoritesProvider>
      </FilterProvider>
    </StrictMode>
  );
}
