/** 
 * APPLY_LINT_RULE by @vonschappler
 * biome-ignore-all lint/suspicious/noArrayIndexKey: imported 3rd party file
 */

"use client";

import { type ButtonProps, buttonVariants } from "@components/ui/button";
import { useTranslations } from "@fuma-translate/react";
import { cn } from "@lib/cn";
import { useSearchContext } from "fumadocs-ui/contexts/search";
import { Search } from "lucide-react";
import type { ComponentProps } from "react";

export interface SearchTriggerProps
  extends Omit<ComponentProps<"button">, "color">,
    ButtonProps {
  hideIfDisabled?: boolean;
}

export function SearchTrigger({
  hideIfDisabled,
  size = "icon-sm",
  color = "ghost",
  ...props
}: SearchTriggerProps) {
  const { setOpenSearch, enabled } = useSearchContext();
  const t = useTranslations({ note: "search trigger" });
  if (hideIfDisabled && !enabled) return null;

  return (
    <button
      type="button"
      className={cn(
        buttonVariants({
          size,
          color,
        }),
        props.className,
      )}
      data-search=""
      aria-label={t("Open Search", { note: "aria-label" })}
      onClick={() => {
        setOpenSearch(true);
      }}
    >
      <Search />
    </button>
  );
}

export interface FullSearchTriggerProps extends ComponentProps<"button"> {
  hideIfDisabled?: boolean;
}

export function FullSearchTrigger({
  hideIfDisabled,
  ...props
}: FullSearchTriggerProps) {
  const { enabled, hotKey, setOpenSearch } = useSearchContext();
  const t = useTranslations({ note: "search trigger" });
  if (hideIfDisabled && !enabled) return null;

  return (
    <button
      type="button"
      data-search-full=""
      {...props}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border bg-fd-secondary/50 p-1.5 ps-2 text-fd-muted-foreground text-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground",
        props.className,
      )}
      onClick={() => {
        setOpenSearch(true);
      }}
    >
      <Search className="size-4" />
      {t("Search")}
      <div className="ms-auto inline-flex gap-0.5">
        {hotKey.map((k, i) => (
          <kbd key={i} className="rounded-md border bg-fd-background px-1.5">
            {k.display}
          </kbd>
        ))}
      </div>
    </button>
  );
}
