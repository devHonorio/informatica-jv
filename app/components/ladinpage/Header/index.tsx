import { Navigation } from "../Navigation";
import { TitleHeader } from "../TitleHeader";

export const Header = () => {
  return (
    <header>
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <TitleHeader />

        <Navigation />

        <button className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold text-sm">
          Contato
        </button>
      </nav>
    </header>
  );
};
