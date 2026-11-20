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
    <div className="border-von-teal/30 bg-von-teal/5 text-von-teal mt-2 ml-2 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs tracking-widest">
      {isCurrent && (
        <span className="bg-von-teal size-2 animate-pulse rounded-full" />
      )}
      {!isCurrent && <span className="size-2 rounded-full bg-red-700" />}
      {version}
    </div>
  );
}
