import { ICharacter } from "@/@types/Character";
import {
  CharactersSortByNameEnum,
  CharactersSortByGenderEnum,
} from "@/contexts/FilterContext";

interface FilterOptions {
  search: string;
  sortByName: CharactersSortByNameEnum;
  sortByGender: CharactersSortByGenderEnum | null;
}

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
    filtered = filtered.filter((character) => character.gender === sortByGender);
  }

  if (sortByName === "asc") {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortByName === "desc") {
    filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
  }

  return filtered;
};
