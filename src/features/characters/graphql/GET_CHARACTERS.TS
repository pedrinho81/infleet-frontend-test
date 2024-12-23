import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters(
    $name: String
    $gender: String
    $status: String
    $page: Int
  ) {
    characters(
      filter: { name: $name, gender: $gender, status: $status }
      page: $page
    ) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        gender
        image
        status
      }
    }
  }
`;
