import Link from "next/link";

interface HeaderLinkProps {
  title: string;
  href: string;
}
export const HeaderLink = ({ href, title }: HeaderLinkProps) => {
  return (
    <Link href={href} className="hover:text-cyan-400 transition">
      {title}
    </Link>
  );
};
