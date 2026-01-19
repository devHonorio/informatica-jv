import type { Metadata } from "next";
import { Google_Sans_Code } from "next/font/google";
import "./globals.css";
import { BackgroundGrid } from "./components/ladinpage/BackgroundGrid";

const googleSansCode = Google_Sans_Code();

export const metadata: Metadata = {
  title: "Informática JV",
  description:
    "Programador, formatação de computadores e celulares, serviços de tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${googleSansCode.className} min-h-screen dark`}>
        <BackgroundGrid />
        {children}
      </body>
    </html>
  );
}
