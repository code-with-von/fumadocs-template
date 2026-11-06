import cn from "cnfast";

const StaticTerminal = ({
  className,
  children,
  username = "vonSchappler",
  subject = "fd-template",
}) => {
  return (
    <div className={cn("mx-auto w-full!", className)}>
      <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 shadow-2xl">
        <div className="flex items-center gap-2 bg-neutral-800 px-4 py-3 font-mono text-xs">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/40" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/40" />
            <div className="h-3 w-3 rounded-full bg-green-500/40" />
          </div>

          <div className="flex-1 text-start">
            <span className="truncate text-neutral-400 text-xs">
              {username} - {subject}
            </span>
          </div>
        </div>

        <div className="no-visible-scrollbar p-4">{children}</div>
      </div>
    </div>
  );
};

export default StaticTerminal;
