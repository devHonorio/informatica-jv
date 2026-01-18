import Image from "next/image";
import notebook from "@/public/notebook-isometrico.png";
export const NotebookImage = () => {
  return (
    <div className="w-full max-w-125 animate-float">
      <Image
        src={notebook}
        alt="Serviços Tech"
        className="rounded-2xl drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
      />
    </div>
  );
};
