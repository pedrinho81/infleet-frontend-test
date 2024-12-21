export function FilterByName() {
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
        onChange={() => ""}
        defaultValue=""
      >
        <option disabled value="" className="text-gray-400">
          Select
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
}
