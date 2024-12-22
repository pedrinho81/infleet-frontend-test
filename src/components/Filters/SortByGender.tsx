import { CharactersSortByGenderEnum } from "@/contexts/FilterContext";
import { useFilter } from "@/features/characters/hooks/useFilter";

export function FilterByGender() {
  const { setSortByGender, sortByGender } = useFilter();
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
          setSortByGender(target.value as CharactersSortByGenderEnum)
        }
        defaultValue=""
      >
        <option
          disabled={!sortByGender}
          value=""
          className={sortByGender ? "text-inherit" : "text-gray-400"}
        >
          All
        </option>
        <option value={CharactersSortByGenderEnum.MALE}>Male</option>
        <option value={CharactersSortByGenderEnum.FEMALE}>Female</option>
      </select>
    </div>
  );
}
