import { ICharacter } from "@/@types/Character";
import { useFavorites } from "@/features/characters/hooks/useFavoritesCharacters";

interface TogglFavoriteButton {
  character: ICharacter;
}

export function ToggleFavoriteButton({ character }: TogglFavoriteButton) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <button
      data-testid="toggle-favorite-button"
      onClick={() => toggleFavorite(character)}
      className={`mt-4 text-3xl ${
        isFavorite(character)
          ? "text-yellow-500"
          : "text-gray-500 hover:text-gray-300"
      } transition-colors duration-200`}
      aria-label={
        isFavorite(character) ? "Remove from favorites" : "Add to favorites"
      }
    >
      {isFavorite(character) ? "★" : "☆"}
    </button>
  );
}
