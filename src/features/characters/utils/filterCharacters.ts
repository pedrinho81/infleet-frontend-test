import { ICharacter } from "@/@types/Character";
import { FilterContextProps } from "@/features/characters/contexts/FilterContext";

export type FilterOptions = Pick<
  FilterContextProps,
  "debouncedSearch" | "gender" | "status"
>;
export const filterCharacters = (
  characters: ICharacter[],
  { debouncedSearch, status, gender }: FilterOptions
): ICharacter[] => {
  let filtered = characters;

  if (debouncedSearch) {
    filtered = filtered.filter((character) =>
      character.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }

  if (gender) {
    filtered = filtered.filter((character) => character.gender === gender);
  }

  console.log(status);
  if (status) {
    filtered = filtered.filter((character) => character.status === status);
  }

  return filtered;
};
