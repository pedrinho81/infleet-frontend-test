import { ICharacter } from "@/@types/Character";
import { Card } from "@/features/characters/components/Card";

interface CharactersListProps {
  characters: ICharacter[] | undefined;
}

export function CharactersList({ characters }: CharactersListProps) {
  if (!characters || characters.length === 0) {
    return (
      <div className="text-center text-droidGold min-h-64 md:min-h-[55.4vh] pt-10 underline uppercase">
        No characters found.
      </div>
    );
  }
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6 min-h-50 md:min-h-[56vh] ">
      {characters.map((character) => (
        <Card key={character.name} character={character} />
      ))}
    </section>
  );
}
