import { BackButton } from "@/components/BackButton";
import { CharactersList } from "@/features/characters/components/List";
import { useFavorites } from "@/features/characters/hooks/useFavorites";
import { useSetPageTitle } from "@/hooks/useSetPageTitle";

export function FavoritesPage() {
  useSetPageTitle("Favorites");
  const {favorites} = useFavorites()

  return (
    <>
      <BackButton />
      <CharactersList characters={favorites} />
    </>
  );
}
