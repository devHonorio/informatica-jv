export const StackItem = ({ name }: { name: string }) => {
  return (
    <div className="p-2 bg-slate-950 rounded border border-slate-800">
      {name}
    </div>
  );
};
