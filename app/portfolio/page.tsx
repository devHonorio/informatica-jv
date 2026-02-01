import {
  Github,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "NestJS Template",
    description:
      "Boilerplate profissional com Swagger, Zod e autenticação JWT para APIs escaláveis.",
    tags: ["NestJS", "Backend", "JWT"],
    href: "https://github.com/devHonorio/nest-template",
  },
  {
    title: "Miguel Açaí",
    description:
      "Sistema fullstack de cardápio digital e gerenciamento de pedidos (Frontend & Backend).",
    tags: ["Fullstack", "E-commerce"],
    href: "https://github.com/devHonorio/miguel-backend",
  },
  {
    title: "RGA",
    description:
      "Sistema de gestão robusto que gerou 84% de aumento de eficiência em operações reais. Código fechado.",
    tags: ["Fullstack", "Gestão", "Finanças"],
    href: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20 border-b border-slate-800 pb-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
              José{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-400">
                Honório
              </span>
            </h1>
            <p className="text-xl text-cyan-400 font-mono tracking-widest uppercase">
              Desenvolvedor Fullstack Node.js / TypeScript
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-slate-400 text-sm">
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Ampére, PR
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} /> honorio.dev@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Phone size={16} /> (44) 9 9869-2094
              </span>
            </div>
          </div>
          <Link
            href="https://github.com/devHonorio"
            target="_blank"
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 px-6 py-3 rounded-2xl transition-all"
          >
            <Github size={20} /> GitHub
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Iniciei minha trajetória em 2019 com Python e hoje sou
              especialista no ecossistema{" "}
              <span className="text-cyan-400">Node.js</span> e TypeScript. Foco
              na entrega de{" "}
              <span className="text-cyan-400">
                código limpo, testável e escalável
              </span>
              , aplicando rigorosamente padrões de projeto e engenharia de
              software
            </p>
          </div>
          <div className="bg-linear-to-br from-purple-600 to-purple-800 p-8 rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <h3 className="text-4xl font-black mb-2">84%</h3>
            <p className="font-bold text-purple-100 uppercase text-sm tracking-wider">
              Aumento de Eficiência
            </p>
            <p className="text-purple-200/80 text-sm mt-4">
              Soluções reais que geraram impacto direto em operações comerciais.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
            Projetos em Destaque
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                href={project.href}
                target="_blank"
                key={project.title}
                className={`bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-purple-500/50 transition even:hover:border-cyan-400/50`}
              >
                <div className="flex justify-between mb-4">
                  <h3 className={`text-2xl font-bold text-cyan-400`}>
                    {project.title}
                  </h3>
                  <ExternalLink size={20} className="text-slate-600" />
                </div>
                <p className="text-slate-400 mb-6">{project.description}</p>
                <div className="flex gap-2 text-xs font-mono">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-800 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-900/30 border border-slate-800 p-10 rounded-[3rem] mb-24 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Tecnologias & Ferramentas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-slate-800 rounded-2xl text-cyan-400">
                <Code2 />
              </div>
              <p className="font-semibold">TypeScript</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-slate-800 rounded-2xl text-purple-500">
                <Database />
              </div>
              <p className="font-semibold">Postgres / Prisma</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-slate-800 rounded-2xl text-cyan-400">
                <Layout />
              </div>
              <p className="font-semibold">React / Next.js</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-slate-800 rounded-2xl text-purple-500">
                <Smartphone />
              </div>
              <p className="font-semibold">Docker / Jest</p>
            </div>
          </div>
          <p className="mt-12 text-slate-500 font-mono text-sm max-w-2xl mx-auto">
            Stack: Express, Zod, Nestjs, React Hook Form, Tanstack Query/Table e
            mais.
          </p>
        </section>

        <footer className="flex flex-col md:flex-row justify-between items-center py-10 border-t border-slate-900 gap-6">
          <div className="text-slate-500 text-sm">
            Disponível para realocação e mobilidade regional.
          </div>
          <div className="flex gap-6">
            <Link
              href="https://wa.me/5544998692094"
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              Entre em contato
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
