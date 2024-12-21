import { ICharacter } from "@/@types/Character";
import { ToggleFavoriteButton } from "@/features/characters/ToggleFavoriteButton";

interface CardProps {
  character: ICharacter;
}

export function Card({ character }: CardProps) {
  return (
    <div className="bg-darkSpace border border-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">{character.name}</h2>
        <p className="text-gray-400 text-sm capitalize">
          Gender: {character.gender}
        </p>
        <p className="text-gray-400 text-sm">
          Birth Year: {character.birthYear}
        </p>
      </div>

      <ToggleFavoriteButton />
    </div>
  );
}
