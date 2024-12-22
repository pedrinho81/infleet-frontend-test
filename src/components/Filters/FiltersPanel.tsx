import { Search } from "@/components/Filters/SearchByName";
import { FilterByGender } from "@/components/Filters/SortByGender";
import { FilterByName } from "@/components/Filters/SortByName";

export function FiltersPanel() {
  return (
    <div className="flex gap-4 flex-wrap">
      <Search />
      <FilterByName />
      <FilterByGender />
    </div>
  );
}
