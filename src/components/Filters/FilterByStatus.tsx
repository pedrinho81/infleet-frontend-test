import { CharactersStatusEnum } from "@/features/characters/contexts/FilterContext";
import { useFilter } from "@/features/characters/hooks/useFilter";

export function FilterByStatus() {
  const { status, setStatus } = useFilter();
  return (
    <div className="flex flex-col">
      <label
        htmlFor="nameFilter"
        className="text-sm font-medium text-galacticWhite"
      >
        Filter by life status
      </label>
      <select
        id="nameFilter"
        className="mt-1 p-2 border border-gray-300 rounded-md text-sm bg-white text-gray-700"
        onChange={({ target }) =>
          setStatus(target.value as CharactersStatusEnum)
        }
        value={status}
        defaultValue={""}
      >
        <option
          disabled={!status}
          value=""
          className={status ? "text-inherit" : "text-gray-400"}
        >
          {status ? "None" : "Select"}
        </option>{" "}
        <option value={CharactersStatusEnum.ALIVE}>Alive</option>
        <option value={CharactersStatusEnum.DEAD}>Dead</option>
        <option value={CharactersStatusEnum.UNKNOWN}>Unknown</option>
      </select>
    </div>
  );
}
