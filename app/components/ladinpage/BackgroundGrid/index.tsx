export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none ">
      <div className="absolute -top-[10%] -left-[10%] h-150 w-150 rounded-full bg-purple-900/20 blur-[120px]" />
      <div className="absolute top-[20%] -right-[10%] h-125 w-125 rounded-full bg-cyan-900/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[40px_40px]" />
    </div>
  );
};
