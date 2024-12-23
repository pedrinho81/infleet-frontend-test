import { useFilter } from "@/features/characters/hooks/useFilter";

export function ResetFiltersButton() {
  const { hasSomeFilter, handleResetFilters } = useFilter();

  return (
    <>
      {hasSomeFilter && (
        <button
          className="p-1 rounded-lg bg-red-600 hover:animate-pulse text-galacticWhite w-28 mt-full h-9"
          onClick={handleResetFilters}
        >
          Reset filters
        </button>
      )}
    </>
  );
}
