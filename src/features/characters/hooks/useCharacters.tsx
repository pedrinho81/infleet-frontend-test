import {
  CharactersQueryData,
  CharactersQueryVariables,
  PageInfo,
} from "@/@types/Character";
import { GET_CHARACTERS } from "@/features/characters/graphql";
import { useFilter } from "@/features/characters/hooks/useFilter";
import { useQuery } from "@apollo/client";

export const useCharacters = () => {
  const { debouncedSearch, status, gender, page } = useFilter();
  const { data, loading, error } = useQuery<
    CharactersQueryData,
    CharactersQueryVariables
  >(GET_CHARACTERS, {
    variables: {
      name: debouncedSearch,
      gender,
      status,
      page,
    },
  });

  const characters = data?.characters?.results;
  const pageInfo: PageInfo = {
    count: data?.characters.info.count,
    pages: data?.characters.info.pages,
    prev: data?.characters.info.prev,
    next: data?.characters.info.next,
  };

  return {
    characters,
    loading,
    error,
    pageInfo,
  };
};
