import { FiltersPanel } from "@/components/Filters/FiltersPanel";
import { Logo } from "@/components/Layout/Header/components/Logo";
import { Search } from "@/components/Layout/Header/components/Search";

export function Header() {
  return (
    <header className="flex flex-col gap-10 justify-between px-4 pt-10 md:px-32 md:py-12 items-center border-none bg-transparent overflow-visible">
      <Logo />
      <div className="flex flex-col gap-4">
        <Search />
        <FiltersPanel />
        
      </div>
    </header>
  );
}
