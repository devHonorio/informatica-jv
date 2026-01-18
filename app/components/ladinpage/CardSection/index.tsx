import Image, { StaticImageData } from "next/image";

interface CardSectionProps {
  title: string;
  banner: StaticImageData;
  description: string;
}

export const CardSection = ({
  banner,
  description,
  title,
}: CardSectionProps) => {
  return (
    <div className="bg-slate-950/30 relative border border-slate-800 p-8 rounded-3xl hover:border-cyan-500/50 even:hover:border-purple-500/50 transition group">
      <div className="h-40 flex justify-center mb-6">
        <Image
          src={banner}
          alt="PC"
          className="h-full object-contain group-hover:scale-110 transition"
        />
      </div>

      <h3 className="text-xl font-bold text-cyan-400">{title}</h3>

      <p className="mt-3 text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};
