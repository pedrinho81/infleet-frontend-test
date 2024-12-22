//TODO:: Make api call (who will be in another folder) and return loading and errors states

import { ICharacter } from "@/@types/Character";
import { useFilter } from "@/features/characters/hooks/useFilter";
import { filterCharacters } from "@/features/characters/utils/filterCharacters";
import { useEffect, useMemo, useState } from "react";

const characters: ICharacter[] = [
  { name: "Luke Skywalker", gender: "male", birthYear: "19BBY" },
  { name: "Leia Organa", gender: "female", birthYear: "19BBY" },
  { name: "Han Solo", gender: "male", birthYear: "29BBY" },
  { name: "Darth Vader", gender: "male", birthYear: "41.9BBY" },
  { name: "Obi-Wan Kenobi", gender: "male", birthYear: "57BBY" },
  { name: "Yoda", gender: "male", birthYear: "896BBY" },
  { name: "Padmé Amidala", gender: "female", birthYear: "46BBY" },
  { name: "Anakin Skywalker", gender: "male", birthYear: "41.9BBY" },
  { name: "Kylo Ren", gender: "male", birthYear: "5ABY" },
  { name: "Rey", gender: "female", birthYear: "15ABY" },
];

export const useCharacters = () => {
  const [isLoading, setIsLoading] = useState(true); //TODO REMOVE MOCK LOADING AND INTEGRATE THE REAL ONE

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const { debouncedSearch, sortByName, sortByGender } = useFilter();

  const filteredCharacters = useMemo(() => {
    return filterCharacters(characters, {
      search: debouncedSearch,
      sortByName,
      sortByGender,
    });
  }, [debouncedSearch, sortByName, sortByGender]);

  return {
    characters: filteredCharacters,
    isLoading,
  };
};
