import { renderHook, act } from "@testing-library/react";
import { useFavorites } from "@/features/characters/hooks/useFavoritesCharacters";
import { db } from "../mocks/db";
import { ICharacter } from "@/@types/Character";
import { AllProviders } from "@/tests/AllProviders";
import { LocalStorageFavoritesKey } from "@/constants";
import { NumberQuery } from "@mswjs/data/lib/query/queryTypes";
describe("useFavorite", () => {
  let character: ICharacter;

  beforeAll(() => {
    character = db.character.create() as unknown as ICharacter;
  });

  afterAll(() => {
    db.character.delete({
      where: { id: { equals: character.id as unknown as number } },
    });
  });
  beforeEach(() => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(vi.fn());
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(
      vi.fn(() => JSON.stringify([]))
    );
    vi.spyOn(Storage.prototype, "removeItem").mockImplementation(vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("should initializes with an empty list", () => {
    const { result } = renderHook(() => useFavorites(), {
      wrapper: AllProviders,
    });

    console.log(result.current.favorites);
    expect(result.current.favorites).toStrictEqual([]);
  });
  it("should correctly add character", () => {
    const { result } = renderHook(() => useFavorites(), {
      wrapper: AllProviders,
    });

    const anotherCharacter = db.character.create() as unknown as ICharacter;
    act(() => {
      result.current.toggleFavorite(character);
    });
    act(() => {
      result.current.toggleFavorite(anotherCharacter);
    });
    expect(localStorage.setItem).toHaveBeenCalledWith(
      LocalStorageFavoritesKey,
      JSON.stringify([character])
    );

    expect(result.current.favorites).toContain(
      db.character.findFirst({
        where: { id: character.id as Partial<NumberQuery> },
      })
    );
    expect(result.current.favorites).toContain(
      db.character.findFirst({
        where: { id: anotherCharacter.id as Partial<NumberQuery> },
      })
    );
    expect(result.current.favorites.length).toBe(db.character.getAll().length);
  });
  it("should correctly remove character", () => {
    const { result } = renderHook(() => useFavorites(), {
      wrapper: AllProviders,
    });

    act(() => {
      result.current.toggleFavorite(character);
    });
    act(() => {
      result.current.toggleFavorite(character);
    });
    expect(localStorage.setItem).not.toHaveBeenLastCalledWith(character);
    expect(result.current.favorites).toStrictEqual([]);
  });
});
