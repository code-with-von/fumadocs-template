"use client";

import { cn } from "@lib/cn";
import type { ComponentProps } from "react";

export function Container(props: ComponentProps<"main">) {
  return (
    <main
      id="nd-home-layout"
      {...props}
      className={cn(
        "flex flex-1 flex-col [--fd-layout-width:1400px]",
        props.className,
      )}
    />
  );
}
