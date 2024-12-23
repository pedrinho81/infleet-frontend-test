import { Search } from "@/components/Filters/SearchByName";
import { FilterByGender } from "@/components/Filters/FilterByGender";
import { FilterByStatus } from "@/components/Filters/FilterByStatus";
import { ResetFiltersButton } from "@/components/Filters/ResetFiltersButton";

export function FiltersPanel() {
  return (
    <div className="flex gap-4 flex-wrap items-end">
      <Search />
      <FilterByStatus />
      <FilterByGender />
      <ResetFiltersButton />
    </div>
  );
}
