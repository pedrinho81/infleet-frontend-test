/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useMemo, ReactNode } from "react";

export enum CharactersGenderEnum {
  MALE = "Male",
  FEMALE = "Female",
  UNKNOWN = "unknown",
}

export enum CharactersStatusEnum {
  DEAD = "Dead",
  ALIVE = "Alive",
  UNKNOWN = "unknown",
}
export interface FilterContextProps {
  search: string;
  debouncedSearch: string;
  gender: CharactersGenderEnum | undefined;
  status: CharactersStatusEnum | undefined;
  page: number;
  hasSomeFilter: boolean;
  setSearch: (value: string) => void;
  setGender: (value: CharactersGenderEnum | undefined) => void;
  setPage: (value: number) => void;
  setStatus: (value: CharactersStatusEnum | undefined) => void;
  handleResetFilters: () => void;
}

export const FilterContext = createContext<FilterContextProps | undefined>(
  undefined
);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [gender, setGender] = useState<CharactersGenderEnum | undefined>(
    undefined
  );
  const [status, setStatus] = useState<CharactersStatusEnum | undefined>(
    undefined
  );

  const hasSomeFilter = !!search || page !== 1 || !!gender || !!status;

  useMemo(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  const handleResetFilters = () => {
    setSearch("");
    setPage(1);
    setGender("" as unknown as undefined);
    setStatus("" as unknown as undefined);
  };

  return (
    <FilterContext.Provider
      value={{
        search,
        debouncedSearch,
        gender,
        status,
        page,
        hasSomeFilter,
        setSearch,
        setGender,
        setPage,
        setStatus,
        handleResetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
