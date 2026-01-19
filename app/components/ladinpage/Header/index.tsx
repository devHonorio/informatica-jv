import { Button } from "@/components/ui/button";
import { Navigation } from "../Navigation";
import { TitleHeader } from "../TitleHeader";

export const Header = () => {
  return (
    <header>
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <TitleHeader />

        <Navigation />

        <Button className="rounded-full">Contato</Button>
      </nav>
    </header>
  );
};
