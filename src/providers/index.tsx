import { FavoritesProvider } from "@/features/characters/contexts/FavoritesCharactersContext";
import "../index.css";
import { PropsWithChildren, StrictMode } from "react";
import { FilterProvider } from "@/features/characters/contexts/FilterContext";
import { ApolloProvider } from "@apollo/client";
import {client} from "@/api"
export function Providers({ children }: PropsWithChildren) {
  return (
    <StrictMode>
      <FilterProvider>
        <FavoritesProvider>
          <ApolloProvider client={client}>{children}</ApolloProvider>
        </FavoritesProvider>
      </FilterProvider>
    </StrictMode>
  );
}
