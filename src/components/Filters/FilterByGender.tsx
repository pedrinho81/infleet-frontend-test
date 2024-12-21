export function FilterByGender() {
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
        onChange={() => ""}
        defaultValue=""
      >
        <option
          disabled
          value=""
          className="text-gray-400" // Style the placeholder
        >
          Select
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
}
