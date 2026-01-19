import { Button } from "@/components/ui/button";
import { Bio } from "../Bio";
import { Experience } from "../Experience";
import { MissionSection } from "../MissionSection";
import Link from "next/link";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen text-white selection:bg-purple-500/30 relative from-transparent to-slate-950 bg-linear-to-b"
    >
      <div className="z-10 max-w-5xl mx-auto px-8 py-20">
        <MissionSection />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Bio />

          <Experience />
        </div>

        <section className="mt-32 text-center p-12 bg-linear-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem]">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para elevar o nível da sua tecnologia?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Estamos em Ampére/PR, com mobilidade total para atender toda a
            região e desenvolver sistemas para o mundo.
          </p>
          <Link href={`https://wa.me/5544998692094`}>
            <Button size="lg">Falar com Vanusa</Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
