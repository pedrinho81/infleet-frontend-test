/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useMemo, ReactNode } from "react";

export enum CharactersSortByNameEnum {
  ASC = "asc",
  DESC = "desc",
}

export enum CharactersSortByGenderEnum {
  MALE = "male",
  FEMALE = "female",
}

interface FilterContextProps {
  debouncedSearch: string;
  setSearch: (value: string) => void;
  sortByName: CharactersSortByNameEnum;
  setSortByName: (value: CharactersSortByNameEnum) => void;
  sortByGender: CharactersSortByGenderEnum | null;
  setSortByGender: (value: CharactersSortByGenderEnum | null) => void;
}

export const FilterContext = createContext<FilterContextProps | undefined>(
  undefined
);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [sortByName, setSortByName] = useState<CharactersSortByNameEnum>(
    CharactersSortByNameEnum.ASC
  );
  const [sortByGender, setSortByGender] =
    useState<CharactersSortByGenderEnum | null>(null);

  useMemo(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  return (
    <FilterContext.Provider
      value={{
        debouncedSearch,
        setSearch,
        sortByName,
        setSortByName,
        sortByGender,
        setSortByGender,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
