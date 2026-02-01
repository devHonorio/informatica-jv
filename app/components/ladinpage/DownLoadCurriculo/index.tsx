import { Download } from "lucide-react";
import Link from "next/link";

export default function DownloadButton() {
  return (
    <Link
      href="/JOSÉ HONORIO.pdf"
      download="JOSÉ_HONORIO_CURRÍCULO.pdf"
      className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 border  px-6 py-3 rounded-2xl transition-all text-black"
    >
      <Download size={20} />
      Baixar Currículo
    </Link>
  );
}
