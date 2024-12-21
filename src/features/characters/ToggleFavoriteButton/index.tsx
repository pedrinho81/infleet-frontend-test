import { useState } from "react";

export function ToggleFavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`mt-4 text-3xl ${
        isFavorite ? "text-yellow-500" : "text-gray-500 hover:text-gray-300"
      } transition-colors duration-200`}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? "★" : "☆"}
    </button>
  );
}
