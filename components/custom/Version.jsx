const Version = ({ isCurrent = false, version }) => {
  return (
    <div className="border-von-teal/30 bg-von-teal/5 text-von-teal inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs tracking-widest">
      {isCurrent && (
        <span className="bg-von-teal size-2 animate-pulse rounded-full" />
      )}
      {!isCurrent && <span className="size-2 rounded-full bg-red-700" />}
      {version}
    </div>
  );
};

export default Version;
