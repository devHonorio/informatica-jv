interface TitleSectionProps {
  name: string;
}
export const TitleSection = ({ name }: TitleSectionProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white">{name}</h2>
      <div className="h-1 w-20 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
    </div>
  );
};
