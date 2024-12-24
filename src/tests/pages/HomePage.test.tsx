import { render, screen, waitFor } from "@testing-library/react";
import { Mock, vi } from "vitest";
import { useCharacters } from "@/features/characters/hooks/useCharacters";
import { HomePage } from "@/pages";
import { useFilter } from "@/features/characters/hooks/useFilter";
import { AllProviders } from "@/tests/AllProviders";
import { db } from "@/tests/mocks/db";
import { ICharacter } from "@/@types/Character";

vi.mock("@/features/characters/hooks/useCharacters");
vi.mock("@/features/characters/hooks/useFilter");

describe("HomePage", () => {
  const charactersMock: ICharacter[] = [];
  beforeEach(() => {
    vi.resetAllMocks();
    (useCharacters as Mock).mockReturnValue({
      characters: charactersMock,
      loading: false,
      error: null,
      pageInfo: { pages: 2, prev: null, next: 2 },
    });

    (useFilter as Mock).mockReturnValue({
      page: 1,
      setPage: vi.fn(),
    });
    Array.from({ length: 2 }, () => {
      charactersMock.push(db.character.create() as unknown as ICharacter);
    });
  });

  it("renders the loading state", () => {
    (useCharacters as Mock).mockReturnValue({
      characters: [],
      loading: true,
      pageInfo: null,
    });

    render(<HomePage />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders characters and pagination when data is available", async () => {
    (useCharacters as Mock).mockReturnValue({
      characters: charactersMock,
      loading: false,
      pageInfo: { pages: 2, next: 2, prev: null },
    });

    render(<HomePage />, { wrapper: AllProviders });

    await waitFor(() => {
      expect(screen.getByText(charactersMock[0].name)).toBeInTheDocument();
      expect(screen.getByText(charactersMock[1].name)).toBeInTheDocument();
    });

    expect(screen.getByText(/next/i)).toBeInTheDocument();
  });

  it("shows no characters message when list is empty", async () => {
    (useCharacters as Mock).mockReturnValue({
      characters: [],
      loading: false,
      pageInfo: { pages: 1, next: null, prev: null },
    });

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/no characters found/i)).toBeInTheDocument();
    });
  });

  it("handles pagination changes", async () => {
    const mockSetPage = vi.fn();

    (useFilter as Mock).mockReturnValue({
      page: 1,
      setPage: mockSetPage,
    });

    render(<HomePage />, { wrapper: AllProviders });

    await waitFor(() => {
      expect(screen.getByText("Next")).toBeInTheDocument();
    });

    screen.getByText("Next").click();

    expect(mockSetPage).toHaveBeenCalledWith(2);
  });
  it("displays an error message when useCharacters fails", async () => {
    (useCharacters as Mock).mockReturnValue({
      characters: null,
      loading: false,
      error: new Error("Something went wrong!"),
    });

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });
  it("does not render pagination when no characters are available", () => {
    (useCharacters as Mock).mockReturnValue({
      characters: [],
      loading: false,
      pageInfo: null,
    });

    render(<HomePage />);

    expect(screen.queryByText(/next/i)).not.toBeInTheDocument();
  });
});
