import { factory, primaryKey } from "@mswjs/data";
import { faker, SimpleFaker } from "@faker-js/faker";
import { ICharacter } from "@/@types/Character";

const customSimpleFaker = new SimpleFaker();

export const db = factory({
  character: {
    id: primaryKey(faker.number.int),
    name: faker.person.fullName,
    gender: () => customSimpleFaker.helpers.arrayElement(['Male', 'Female', 'unknown']),
    status: () => customSimpleFaker.helpers.arrayElement(['Alive', 'Dead', 'unknown']),
    image: () => faker.image.avatar(),
  },
});

/**
 * Filters and paginates characters from the mock database based on the given criteria.
 * @param filters The filtering options.
 * @param pagination The pagination options.
 * @returns An object containing the paginated and filtered characters along with page info.
 */
export function filterAndPaginateCharacters(
  filters: {
    search?: string;
    gender?: "Male" | "Female" | "unknown";
    status?: "Alive" | "Dead" | "unknown";
  },
  pagination: {
    currentPage: number;
    itemsPerPage: number;
  }
) {
  const { search, gender, status } = filters;
  const { currentPage, itemsPerPage } = pagination;

  // Filter characters
  const characters = Array.from({length: 20}, () => db.character.create()); // Mock characters list
  const filteredCharacters = characters.filter(character => {
    const matchesSearch =
      !search || character.name.toLowerCase().includes(search.toLowerCase());
    const matchesGender = !gender || character.gender === gender;
    const matchesStatus = !status || character.status === status;

    return matchesSearch && matchesGender && matchesStatus;
  });

  // Pagination
  const totalItems = filteredCharacters.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCharacters = filteredCharacters.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return {
    characters: paginatedCharacters as unknown as ICharacter[],
    pageInfo: {
      totalItems,
      totalPages,
      currentPage,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
    },
  };
}
