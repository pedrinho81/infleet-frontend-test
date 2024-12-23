import { CharactersGenderEnum, CharactersStatusEnum } from "@/features/characters/contexts/FilterContext";

interface ICharacter {
  id: string;
  name: string;
  gender: string;
  image: string;
  status: string;
}

interface PageInfo {
  count: number | undefined;
  pages: number | undefined;
  next: number | null | undefined;
  prev: number | null | undefined;
}

interface CharactersQueryData {
  characters: {
    info: PageInfo;
    results: ICharacter[];
  };
}

interface CharactersQueryVariables {
  name?: string;
  gender?: CharactersGenderEnum;
  status?: CharactersStatusEnum;
  page?: number;
}
