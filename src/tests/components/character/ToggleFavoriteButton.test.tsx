import { render, screen, fireEvent } from "@testing-library/react";
import { ToggleFavoriteButton } from "@/features/characters/components/ToggleFavoriteButton";
import { db } from "@/tests/mocks/db";
import { AllProviders } from "@/tests/AllProviders";
import { useFavorites } from "@/features/characters/hooks/useFavoritesCharacters";
import { ICharacter } from "@/@types/Character";
import { vi, Mock } from 'vitest'

vi.mock("@/features/characters/hooks/useFavoritesCharacters", () => ({
  useFavorites: vi.fn(),
}));

describe("ToggleFavoriteButton Component", () => {
  const mockIsFavorite = vi.fn();
  const mockToggleFavorite = vi.fn();

  const mockCharacter = db.character.create() as unknown as ICharacter;

  beforeEach(() => {
    (useFavorites as Mock).mockReturnValue({
      isFavorite: mockIsFavorite,
      toggleFavorite: mockToggleFavorite,
    });

    // Reset mock functions
    mockIsFavorite.mockReset();
    mockToggleFavorite.mockReset();
  });

  it("renders correctly for non-favorite characters", () => {
    mockIsFavorite.mockReturnValue(false);

    render(<ToggleFavoriteButton character={mockCharacter} />, {
      wrapper: AllProviders,
    });

    const button = screen.getByTestId("toggle-favorite-button");
    expect(button).toHaveTextContent("☆");
    expect(button).toHaveAttribute("aria-label", "Add to favorites");
  });

  it("renders correctly for favorite characters", () => {
    mockIsFavorite.mockReturnValue(true);

    render(<ToggleFavoriteButton character={mockCharacter} />, {
      wrapper: AllProviders,
    });

    const button = screen.getByTestId("toggle-favorite-button");
    expect(button).toHaveTextContent("★");
    expect(button).toHaveAttribute("aria-label", "Remove from favorites");
  });

  it("calls toggleFavorite on button click", () => {
    mockIsFavorite.mockReturnValue(false);

    render(<ToggleFavoriteButton character={mockCharacter} />, {
      wrapper: AllProviders,
    });

    const button = screen.getByTestId("toggle-favorite-button");
    fireEvent.click(button);

    expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
    expect(mockToggleFavorite).toHaveBeenCalledWith(mockCharacter);
  });
});
