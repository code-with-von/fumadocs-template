"use client";

export type VersionExampleProps = {
  version: string;
  isCurrent?: boolean;
};

export function VersionExampleComponent({
  version,
  isCurrent,
}: VersionExampleProps) {
  return (
    <div className="mt-2 ml-2 inline-flex w-fit items-center gap-2 rounded-full border border-von-teal/30 bg-von-teal/5 px-3 py-1 font-mono text-von-teal text-xs tracking-widest">
      {isCurrent && (
        <span className="h-2 w-2 animate-pulse rounded-full bg-von-teal" />
      )}
      {!isCurrent && <span className="h-2 w-2 rounded-full bg-red-700" />}
      {version}
    </div>
  );
}
