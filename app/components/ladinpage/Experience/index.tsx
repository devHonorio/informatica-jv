import { ExpItem } from "../ExpItem";
import { Stack } from "../Stack";

const EXP = [
  {
    strong: "84%",
    title: "Eficiência Comprovada",
    description:
      "Nosso sistema para a RGA Doces e Salgados aumentou a eficiência organizacional interna drasticamente.",
  },

  {
    strong: "+7",
    title: "Anos acompanhando a TI",
    description:
      "Desde 2019 evoluindo de Python para o ecossistema robusto do TypeScript e Node.js.",
  },

  {
    strong: "01",
    title: "Princípio Inegociável",
    description:
      "Qualidade técnica absoluta através de Princípios SOLID, CI/CD e testes automatizados.",
  },
];

export const Experience = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
      <h3 className="text-xl font-bold mb-6 text-white">Nossa Trajetória</h3>

      <div className="space-y-6">
        {EXP.map(({ description, strong, title }) => {
          return (
            <ExpItem
              key={title}
              description={description}
              strong={strong}
              title={title}
            />
          );
        })}
      </div>

      <Stack />
    </div>
  );
};
