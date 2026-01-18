interface TagTechProps {
  tech: string;
}

export const TagTech = ({ tech }: TagTechProps) => {
  return (
    <span
      key={tech}
      className="px-3 py-1 bg-slate-900 border border-slate-800 text-xs rounded-full text-cyan-300"
    >
      {tech}
    </span>
  );
};
