import { Pagination } from "@/components/Filters/Pagination";
import { Loading } from "@/components/Loading";

import { CharactersList } from "@/features/characters/components/List";
import { useSetPageTitle } from "@/hooks/useSetPageTitle";
import { FavoritesLink } from "@/components/FavoritesLink";
import { useCharacters } from "@/features/characters/hooks/useCharacters";
import { useFilter } from "@/features/characters/hooks/useFilter";

export function HomePage() {
  useSetPageTitle("Home");

  const { characters, loading, pageInfo } = useCharacters();
  const { page, setPage } = useFilter();
  
  if (loading) {
    return <Loading />;
  }
  console.log(page);
  console.log(pageInfo);
  return (
    <>
      <FavoritesLink />
      <CharactersList characters={characters} />
      {!!characters?.length && (
        <Pagination
          pageInfo={pageInfo}
          page={page}
          onPageChange={(page) => setPage(page)}
        />
      )}
    </>
  );
}
