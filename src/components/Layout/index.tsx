import { Header } from "./Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <body className="relative">
      <div className="absolute stars min-h-dvh"></div>
      <Header />
      <main className="px-4 md:px-32">{children}</main>
    </body>
  );
}
