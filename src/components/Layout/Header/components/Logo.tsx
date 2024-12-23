import { Link } from "wouter";

export function Logo() {
  return (
    <Link href="/">
      <img
        className="w-56 h-20 bg-none relative z-10 neonGlow"
        alt="rick-and-morty-logo"
        src={"/logo.png"}
      />
      ;
    </Link>
  );
}
