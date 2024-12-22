import { Link } from "wouter";

export function FavoritesLink() {
  return (
    <>
      <Link
        href="/favorites"
        className="mx-auto space-x-2 bg-droidGold hover:animate-pulse text-black px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out"
      >
        <span className="text-sm font-medium"> ★ See your favorites</span>
      </Link>
    </>
  );
}
