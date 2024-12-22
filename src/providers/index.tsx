import { FavoritesProvider } from "@/contexts/FavoritesContext";
import "../index.css";
import { PropsWithChildren, StrictMode } from "react";
import { FilterProvider } from "@/contexts/FilterContext";

export function Providers({ children }: PropsWithChildren) {
  return (
    <StrictMode>
      <FilterProvider>
        <FavoritesProvider>{children}</FavoritesProvider>
      </FilterProvider>
    </StrictMode>
  );
}
