import Image from "next/image";
import logo from "@/public/logo.png";
export const TitleHeader = () => {
  return (
    <div className="md:text-2xl font-bold tracking-tighter bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent flex items-center text-nowrap text-sm">
      <Image
        alt="Logo Informática JV"
        src={logo}
        width={100}
        height={100}
        className="md:w-20 md:h-20 w-12
h-12 "
      />
      INFORMÁTICA JV
    </div>
  );
};
