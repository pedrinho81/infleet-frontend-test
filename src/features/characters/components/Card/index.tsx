import { ICharacter } from "@/@types/Character";
import { ToggleFavoriteButton } from "@/features/characters/components/ToggleFavoriteButton";

interface CardProps {
  character: ICharacter;
}

export function Card({ character }: CardProps) {
  enum StatusStylesEnum {
    Alive = "bg-green-500 text-white",
    Dead = "bg-gray-500 text-white",
    unknown = "bg-yellow-500 text-white",
  }

  enum GenderStylesEnum {
    Male = "text-blue-500",
    Female = "text-pink-500",
    unknown = "text-gray-500",
  }

  return (
    <div className="bg-darkSpace border border-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg duration-300 flex flex-col items-center min-h-[360px] transition-transform ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 max-w-md">
      <img
        alt={character.name + " image"}
        className="rounded-full w-40 h-40 mx-auto"
        src={character.image}
      />
      <ToggleFavoriteButton character={character} />

      <h2 className="text-2xl font-bold  text-center text-white" role="name">
        {character.name}
      </h2>
      <div className="flex justify-between items-center mt-auto w-full">
        <p className="text-gray-400">
          Gender:{" "}
          <span
            className={`text-sm capitalize ${
              GenderStylesEnum[
                character.gender as keyof typeof GenderStylesEnum
              ]
            }`}
            role="gender"
          >
            {character.gender}
          </span>
        </p>
        <p className="text-gray-400">
          Life status:{" "}
          <span
            className={`text-sm capitalize rounded-lg p-1 ${
              StatusStylesEnum[
                character.status as keyof typeof StatusStylesEnum
              ]
            }`}
            role="status"
          >
            {character.status}
          </span>
        </p>
      </div>
    </div>
  );
}
