import { CharactersGenderEnum } from "@/features/characters/contexts/FilterContext";
import { useFilter } from "@/features/characters/hooks/useFilter";

export function FilterByGender() {
  const { gender,  setGender } = useFilter();
  return (
    <div className="flex flex-col">
      <label
        htmlFor="genderFilter"
        className="text-sm font-medium text-galacticWhite"
      >
        Filter by Gender
      </label>
      <select
        id="genderFilter"
        className="mt-1 p-2 border border-gray-300 rounded-md text-sm bg-white text-gray-700"
        onChange={({ target }) =>
          setGender(target.value as CharactersGenderEnum)
        }
        value={gender}
        defaultValue=""
      >
        <option
          disabled={!gender}
          value=""
          className={gender ? "text-inherit" : "text-gray-400"}
        >
          All
        </option>
        <option value={CharactersGenderEnum.MALE}>Male</option>
        <option value={CharactersGenderEnum.FEMALE}>Female</option>
        <option value={CharactersGenderEnum.UNKNOWN}>Unknown</option>
      </select>
    </div>
  );
}
