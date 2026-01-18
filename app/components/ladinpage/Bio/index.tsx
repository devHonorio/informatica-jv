import { TagTech } from "../TagTech";

const TECHNOLOGY = ["Next.js", "Node.js", "Docker", "PostgreSQL", "SOLID"];

export const Bio = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <span className="h-px w-8 bg-cyan-400" /> José Honório
        </h2>

        <p className="text-slate-300 leading-relaxed">
          Desenvolvedor Fullstack apaixonado por resolver problemas complexos
          com soluções simples. Com formação em{" "}
          <strong>Análise e Desenvolvimento de Sistemas</strong> pela UNIPAR e
          especialização no <strong>curso.dev</strong> de Filipe Deschamps, foco
          em entregar código limpo, testado e de alta performance.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {TECHNOLOGY.map((tech) => (
            <TagTech key={tech} tech={tech} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-500 mb-4 flex items-center gap-2">
          <span className="h-px w-8 bg-purple-500"></span> Vanusa
        </h2>
        <p className="text-slate-300 leading-relaxed">
          O pilar de suporte e atendimento da nossa empresa. Vanusa traz o olhar
          humano e a organização necessária para garantir que cada cliente, seja
          de formatação ou de sistemas complexos, receba um atendimento premium
          e personalizado.
        </p>
      </div>
    </div>
  );
};
