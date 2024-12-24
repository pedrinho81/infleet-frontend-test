import { render, screen } from "@testing-library/react";
import { CharactersList } from "@/features/characters/components/List";
import { db } from "../../mocks/db";
import { AllProviders } from "@/tests/AllProviders";
import { ICharacter } from "@/@types/Character";

describe("CharactersList Component", () => {
  const noCharactersMessage = /no characters/i;

  it("renders the 'No characters found' message when there are no characters", async () => {
    render(<CharactersList characters={[]} />);
    expect(await screen.findByText(noCharactersMessage)).toBeInTheDocument();
  });

  it("renders the 'No characters found' message when characters prop is undefined", async () => {
    render(<CharactersList characters={undefined} />);
    expect(await screen.findByText(noCharactersMessage)).toBeInTheDocument();
  });

  it("renders the list of characters when characters are provided", () => {
    const mockCharacters = Array.from({ length: 3 }, () =>
      db.character.create()
    ) as unknown as ICharacter[];
    render(<CharactersList characters={mockCharacters} />, {
      wrapper: AllProviders,
    });

    const characterCards = screen.getAllByRole("img");
    expect(characterCards).toHaveLength(mockCharacters.length);

    mockCharacters.forEach((character) => {
      expect(screen.getByText(character.name)).toBeInTheDocument();
    });
  });
});
