import blocos from "@/public/blocos-dados.png";
import notebook from "@/public/notebook-isometrico.png";
import smartphone from "@/public/smartphone-isometrico.png";

import { TitleSection } from "../TitleSection";
import { CardSection } from "../CardSection";

const SERVICES = [
  {
    banner: notebook,
    title: "Formatação de PCs",
    description:
      "Otimização completa, limpeza de hardware e instalação de softwares essenciais com backup seguro.",
  },
  {
    banner: smartphone,
    title: "Smartphones",
    description:
      "Manutenção de software, remoção de vírus e configuração avançada para Android e iOS.",
  },
  {
    banner: blocos,
    title: "Sistemas Web",
    description:
      "Desenvolvimento de sites e sistemas sob medida utilizando as tecnologias mais modernas do mercado.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-8 py-20">
      <TitleSection name="Nossas Especialidades" />

      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map(({ banner, description, title }) => {
          return (
            <CardSection
              key={title + description}
              banner={banner}
              description={description}
              title={title}
            />
          );
        })}
      </div>
    </section>
  );
};
