import { useFilter } from "@/features/characters/hooks/useFilter";

export function Search() {
  const {search, setSearch } = useFilter();
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block text-sm font-medium text-galacticWhite"
      >
        Search character
      </label>
      <input
        onChange={({ target }) => setSearch(target.value)}
        type="text"
        value={search}
        id="first_name"
        className="mt-1 bg-gray-50 border border-gray-300 w-60 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
        placeholder="Rick"
        required
      />
    </div>
  );
}
