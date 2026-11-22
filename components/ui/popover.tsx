"use client";

import { cn } from "@lib/cn";
import * as PopoverPrimitive from "@radix-ui/react-popover";

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = PopoverPrimitive.Trigger;

export function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        side="bottom"
        className={cn(
          "bg-fd-popover/60 text-fd-popover-foreground data-[state=closed]:animate-fd-popover-out data-[state=open]:animate-fd-popover-in z-50 max-h-(--radix-popover-content-available-height) max-w-[98vw] min-w-60 origin-(--radix-popover-content-transform-origin) overflow-y-auto rounded-xl border p-2 text-sm shadow-lg backdrop-blur-lg focus-visible:outline-none",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

export const PopoverClose = PopoverPrimitive.PopoverClose;
