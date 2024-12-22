import { FilterContext } from "@/contexts/FilterContext";
import { useContext } from "react";

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
