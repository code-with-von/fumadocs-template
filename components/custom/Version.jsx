const Version = ({ isCurrent = false, version }) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-von-teal/30 bg-von-teal/5 px-3 py-1 font-mono text-von-teal text-xs tracking-widest">
      {isCurrent && (
        <span className="h-2 w-2 animate-pulse rounded-full bg-von-teal" />
      )}
      {!isCurrent && <span className="h-2 w-2 rounded-full bg-red-700" />}
      {version}
    </div>
  );
};

export default Version;
