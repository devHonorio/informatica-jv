import { Slogan } from "../Slogan";
import { History } from "../History";
import { ButtonAction } from "../ButtonAction";
import { NotebookImage } from "../NotebookImage";

export const HeroSection = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <Slogan />

        <History />

        <ButtonAction />
      </div>

      <div className="flex justify-center relative">
        <NotebookImage />
      </div>
    </section>
  );
};
