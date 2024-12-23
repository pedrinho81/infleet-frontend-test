import { ICharacter } from "@/@types/Character";
import { FilterContextProps } from "@/features/characters/contexts/FilterContext";

export type FilterOptions = Omit<
  FilterContextProps,
  "setSearch" | "setSortByName" | "setSortByGender" | "debouncedSearch"
> & {
  search: string;
};

export const filterCharacters = (
  characters: ICharacter[],
  { search, sortByName, sortByGender }: FilterOptions
): ICharacter[] => {
  let filtered = characters;

  if (search) {
    filtered = filtered.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sortByGender) {
    filtered = filtered.filter(
      (character) => character.gender === sortByGender
    );
  }

  if (sortByName === "asc") {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortByName === "desc") {
    filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
  }

  return filtered;
};
