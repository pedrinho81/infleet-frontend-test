import { CharactersSortByNameEnum } from "@/contexts/FilterContext";
import { useFilter } from "@/features/characters/hooks/useFilter";

export function FilterByName() {
  const { sortByName, setSortByName } = useFilter();
  return (
    <div className="flex flex-col">
      <label
        htmlFor="nameFilter"
        className="text-sm font-medium text-galacticWhite"
      >
        Sort by Name
      </label>
      <select
        id="nameFilter"
        className="mt-1 p-2 border border-gray-300 rounded-md text-sm bg-white text-gray-700"
        onChange={({ target }) =>
          setSortByName(target.value as CharactersSortByNameEnum)
        }
        defaultValue={CharactersSortByNameEnum.ASC}
      >
        <option value={CharactersSortByNameEnum.ASC}>A-Z</option>
        {sortByName && (
          <option value={CharactersSortByNameEnum.DESC}>Z-A</option>
        )}
      </select>
    </div>
  );
}
