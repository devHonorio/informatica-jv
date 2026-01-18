import { StackItem } from "../StackItem";

const STACK_ITEMS = [
  "EXPRESS / PRISMA",
  "REACT / NEXT.JS",
  "DOCKER / JEST",
  "ZOD / TANSTACK",
];

export const Stack = () => {
  return (
    <div className="mt-10 pt-8 border-t border-slate-800">
      <p className="text-sm text-slate-400 mb-4 font-semibold uppercase tracking-widest text-center">
        Stack de Trabalho
      </p>
      <div className="grid grid-cols-2 gap-4 text-[10px] font-mono text-center">
        {STACK_ITEMS.map((name) => {
          return <StackItem key={name} name={name} />;
        })}
      </div>
    </div>
  );
};
