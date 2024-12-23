import React, { createContext, useState, useEffect, useMemo } from "react";
import { ICharacter } from "@/@types/Character";
import { useFilter } from "@/features/characters/hooks/useFilter";
import { filterCharacters } from "@/features/characters/utils/filterCharacters";
import { LocalStorageFavoritesKey } from "@/constants";

interface FavoritesContextType {
  favorites: ICharacter[];
  toggleFavorite: (character: ICharacter) => void;
  isFavorite: (character: ICharacter) => boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<ICharacter[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem(LocalStorageFavoritesKey);
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const saveToLocalStorage = (favorites: ICharacter[]) => {
    localStorage.setItem(LocalStorageFavoritesKey, JSON.stringify(favorites));
  };

  const toggleFavorite = (character: ICharacter) => {
    const isFavorite = favorites.some((fav) => fav.id === character.id);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.id !== character.id)
      : [...favorites, character];

    setFavorites(updatedFavorites);
    saveToLocalStorage(updatedFavorites);
  };

  const isFavorite = (character: ICharacter) =>
    favorites.some((fav) => fav.id === character.id);

  const { debouncedSearch, status, gender } = useFilter();

  const filteredFavorites = useMemo(() => {
    return filterCharacters(favorites, {
      debouncedSearch,
      status,
      gender,
    });
  }, [debouncedSearch, status, gender, favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites: filteredFavorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
