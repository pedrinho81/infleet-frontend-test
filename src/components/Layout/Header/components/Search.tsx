export function Search() {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-galacticWhite"
      >
        Search character
      </label>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 w-60 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        placeholder="Luke Skywalker"
        required
      />
    </div>
  );
}
