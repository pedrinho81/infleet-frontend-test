import { FavoritesProvider } from "@/providers/FavoritesContext";
import "../index.css";
import { PropsWithChildren, StrictMode } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <StrictMode>
      <FavoritesProvider>{children}</FavoritesProvider>
    </StrictMode>
  );
}
