import { useEffect, useState } from "react";
import { ICharacter } from "@/@types/Character";
import { GenderEnum } from "@/@types/enums";
import { Pagination } from "@/components/Filters/Pagination";
import { Loading } from "@/components/Loading";

import { CharactersList } from "@/features/characters/components/List";
import { useSetPageTitle } from "@/hooks/useSetPageTitle";
import { FavoritesLink } from "@/components/FavoritesLink";

const characters: ICharacter[] = [
  { name: "Luke Skywalker", gender: GenderEnum.MALE, birthYear: "19BBY" },
  { name: "Leia Organa", gender: GenderEnum.FEMALE, birthYear: "19BBY" },
  { name: "Han Solo", gender: GenderEnum.MALE, birthYear: "29BBY" },
  { name: "Darth Vader", gender: GenderEnum.MALE, birthYear: "41.9BBY" },
  { name: "Obi-Wan Kenobi", gender: GenderEnum.MALE, birthYear: "57BBY" },
  { name: "Yoda", gender: GenderEnum.MALE, birthYear: "896BBY" },
  { name: "Padmé Amidala", gender: GenderEnum.FEMALE, birthYear: "46BBY" },
  { name: "Anakin Skywalker", gender: GenderEnum.MALE, birthYear: "41.9BBY" },
  { name: "Kylo Ren", gender: GenderEnum.MALE, birthYear: "5ABY" },
  { name: "Rey", gender: GenderEnum.FEMALE, birthYear: "15ABY" },
];
export function HomePage() {
  useSetPageTitle("Home");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

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
