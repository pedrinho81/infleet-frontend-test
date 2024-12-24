import { render, screen } from "@testing-library/react";
import { Card } from "@/features/characters/components/Card";
import { db } from "../../mocks/db";
import { AllProviders } from "@/tests/AllProviders";
import { ICharacter } from "@/@types/Character";

describe("Card Component", async () => {
  it("renders the character's name, gender, and status correctly", () => {
    const mockCharacter = db.character.create() as unknown as ICharacter;

    render(<Card character={mockCharacter} />, {
      wrapper: AllProviders,
    });

    const name = screen.getByRole("name");
    const gender = screen.getByRole("gender");
    const status = screen.getByRole("status");
    expect(name).toHaveTextContent(new RegExp(mockCharacter.name, "i"));
    expect(gender).toHaveTextContent(new RegExp(mockCharacter.gender, "i"));
    expect(status).toHaveTextContent(new RegExp(mockCharacter.status, "i"));
  });

  it("renders the character image with the correct alt text", () => {
    const mockCharacter = db.character.create() as unknown as ICharacter;

    render(<Card character={mockCharacter} />, {
      wrapper: AllProviders,
    });
    const characterImage = screen.getByRole("img");
    expect(characterImage).toBeInTheDocument();
    expect(characterImage).toHaveAttribute("src", mockCharacter.image);
  });

  it("applies the correct styles for gender and status", () => {
    const mockCharacter = db.character.create({
      gender: "Male",
      status: "Alive",
    }) as unknown as ICharacter;

    render(<Card character={mockCharacter} />, {
      wrapper: AllProviders,
    });

    const genderElement = screen.getByText(mockCharacter.gender);
    expect(genderElement).toHaveClass("text-blue-500");

    const statusElement = screen.getByText(mockCharacter.status);
    expect(statusElement).toHaveClass("bg-green-500 text-white");
  });

  it("renders the ToggleFavoriteButton component", () => {
    const mockCharacter = db.character.create() as unknown as ICharacter;

    render(<Card character={mockCharacter} />, {
      wrapper: AllProviders,
    });

    const favoriteButton = screen.getByRole("button");

    expect(favoriteButton).toHaveTextContent("☆");
  });
});
