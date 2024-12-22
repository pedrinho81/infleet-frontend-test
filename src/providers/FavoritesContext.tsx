import React, { createContext, useState, useEffect } from "react";
import { ICharacter } from "@/@types/Character";

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
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const saveToLocalStorage = (favorites: ICharacter[]) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const toggleFavorite = (character: ICharacter) => {
    const isFavorite = favorites.some((fav) => fav.name === character.name);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.name !== character.name)
      : [...favorites, character];

    setFavorites(updatedFavorites);
    saveToLocalStorage(updatedFavorites);
  };

  const isFavorite = (character: ICharacter) =>
    favorites.some((fav) => fav.name === character.name);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
