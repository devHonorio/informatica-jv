import { HeaderLink } from "../HeaderLink";

const LINKS = [
  {
    title: "Início",
    href: "#",
  },
  {
    title: "Serviços",
    href: "#services",
  },
  {
    title: "Sobre",
    href: "#about",
  },
];

export const Navigation = () => {
  return (
    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
      {LINKS.map(({ href, title }) => {
        return <HeaderLink key={href + title} href={href} title={title} />;
      })}
    </div>
  );
};
