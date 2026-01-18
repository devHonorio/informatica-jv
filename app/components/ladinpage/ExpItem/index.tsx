interface ExpItemProps {
  strong: string;
  title: string;
  description: string;
}

export const ExpItem = ({ description, title, strong }: ExpItemProps) => {
  return (
    <div className="flex gap-4">
      <div className="text-cyan-400 even:bg-purple-500 font-mono font-bold text-xl">
        {strong}
      </div>
      <div>
        <h4 className="font-semibold text-slate-200">{title}</h4>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
};
