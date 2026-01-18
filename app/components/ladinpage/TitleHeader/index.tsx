import Image from "next/image";
import logo from "@/public/logo.png";
export const TitleHeader = () => {
  return (
    <div className="text-2xl font-bold tracking-tighter bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent flex items-center">
      <Image
        alt="Logo Informática JV"
        src={logo}
        width={100}
        height={100}
        className="w-20 h-20"
      />
      INFORMÁTICA JV
    </div>
  );
};
