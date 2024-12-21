import { FilterByGender } from "@/components/Filters/FilterByGender";
import { FilterByName } from "@/components/Filters/FilterByName";

export function FiltersPanel() {
  return (
    <div className="flex space-x-4">
      <FilterByName />
      <FilterByGender />
      {/* //TODO:: Filter by oldest/newest */}
    </div>
  );
}
