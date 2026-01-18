import { HeaderLink } from "../HeaderLink";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-slate-900 py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          © 2026 Honor Code Digital - José & Vanusa
        </p>
        <div className="flex gap-6 text-slate-400">
          <HeaderLink title="Instagram" href="#" />

          <HeaderLink title="WhatsApp" href="#" />
        </div>
      </div>
    </footer>
  );
};
