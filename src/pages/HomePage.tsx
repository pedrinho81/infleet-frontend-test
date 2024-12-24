import { Pagination } from "@/components/Filters/Pagination";
import { Loading } from "@/components/Loading";

import { CharactersList } from "@/features/characters/components/List";
import { useSetPageTitle } from "@/hooks/useSetPageTitle";
import { FavoritesLink } from "@/components/FavoritesLink";
import { useCharacters } from "@/features/characters/hooks/useCharacters";
import { useFilter } from "@/features/characters/hooks/useFilter";

export function HomePage() {
  useSetPageTitle("Home");

  const { characters, loading, pageInfo, error } = useCharacters();
  const { page, setPage } = useFilter();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <FavoritesLink />
      <CharactersList characters={characters} />
      {!!error && <div className="text-center text-droidGold min-h-64 md:min-h-[55.4vh] pt-10 underline uppercase">
        Something went wrong
      </div>}
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
