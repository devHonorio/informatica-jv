import { Button } from "@/components/ui/button";
import { Navigation } from "../Navigation";
import { TitleHeader } from "../TitleHeader";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <TitleHeader />

        <Navigation />

        <Link href="/portfolio" target="_blank">
          <Button className="rounded-full">Portfólio</Button>
        </Link>
      </nav>
    </header>
  );
};
