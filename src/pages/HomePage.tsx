import { Pagination } from "@/components/Filters/Pagination";
import { Loading } from "@/components/Loading";

import { CharactersList } from "@/features/characters/components/List";
import { useSetPageTitle } from "@/hooks/useSetPageTitle";
import { FavoritesLink } from "@/components/FavoritesLink";
import { useCharacters } from "@/features/characters/hooks/useCharacters";

export function HomePage() {
  useSetPageTitle("Home");

  const { characters, isLoading } = useCharacters();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <FavoritesLink />
      <CharactersList characters={characters} />
      {!!characters.length && <Pagination />}
    </>
  );
}
