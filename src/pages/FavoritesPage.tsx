import { ICharacter } from "@/@types/Character";
import { GenderEnum } from "@/@types/enums";
import { BackButton } from "@/components/BackButton";
import { CharactersList } from "@/features/characters/List";
import { useSetPageTitle } from "@/hooks/useSetPageTitle";

export function FavoritesPage() {
  useSetPageTitle("Favorites");
  const favoritesCharacters: ICharacter[] = [
    { name: "Luke Skywalker", gender: GenderEnum.MALE, birthYear: "19BBY" },
    { name: "Darth Vader", gender: GenderEnum.MALE, birthYear: "41.9BBY" },
    { name: "Yoda", gender: GenderEnum.MALE, birthYear: "896BBY" },
    { name: "Anakin Skywalker", gender: GenderEnum.MALE, birthYear: "41.9BBY" },
    { name: "Kylo Ren", gender: GenderEnum.MALE, birthYear: "5ABY" },
  ];
  return (
    <>
      <BackButton />
      <CharactersList characters={favoritesCharacters} />
    </>
  );
}
