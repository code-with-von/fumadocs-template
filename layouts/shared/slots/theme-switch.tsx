/**
 * APPLY_LINT_RULE by @vonschappler 
 * biome-ignore-all lint/suspicious/useIterableCallbackReturn: this is an imported file from 3rd party library
 */

"use client";

import { useTranslations } from "@fuma-translate/react";
import { cn } from "@lib/cn";
import { cva } from "class-variance-authority";
import { Airplay, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { type ComponentProps, useEffect, useState } from "react";
import { flushSync } from "react-dom";

const itemVariants = cva("size-6.5 p-1.5 text-fd-muted-foreground", {
  variants: {
    active: {
      true: "bg-fd-accent text-fd-accent-foreground",
      false: "text-fd-muted-foreground",
    },
  },
});

const full = [
  ["light", Sun] as const,
  ["dark", Moon] as const,
  ["system", Airplay] as const,
];

export interface ThemeSwitchProps extends ComponentProps<"div"> {
  mode?: "light-dark" | "light-dark-system";
}

export function ThemeSwitch({
  className,
  mode = "light-dark",
  ...props
}: ThemeSwitchProps) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations({ note: "theme switcher" });
  const themeAriaLabels = {
    light: t("Light", { note: "aria-label" }),
    dark: t("Dark", { note: "aria-label" }),
    system: t("System", { note: "aria-label" }),
  };

  const handleThemeChange = (newTheme: string) => {
    if (document?.startViewTransition) {
      document.startViewTransition(() => flushSync(() => setTheme(newTheme)));
    } else {
      setTheme(newTheme);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const container = cn(
    "inline-flex items-center overflow-hidden rounded-full border p-1 *:rounded-full",
    className,
  );

  if (mode === "light-dark") {
    const value = mounted ? resolvedTheme : null;

    return (
      <button
        className={container}
        aria-label={t("Toggle Theme", { note: "aria-label" })}
        onClick={() => handleThemeChange(value === "light" ? "dark" : "light")}
        data-theme-toggle=""
        type="button"
      >
        {full.map(([key, Icon]) => {
          if (key === "system") return;

          return (
            <Icon
              key={key}
              fill="currentColor"
              className={cn(itemVariants({ active: value === key }))}
            />
          );
        })}
      </button>
    );
  }

  const value = mounted ? theme : null;

  return (
    <div className={container} data-theme-toggle="" {...props}>
      {full.map(([key, Icon]) => (
        <button
          key={key}
          aria-label={themeAriaLabels[key]}
          className={cn(itemVariants({ active: value === key }))}
          onClick={() => handleThemeChange(key)}
          type="button"
        >
          <Icon className="size-full" fill="currentColor" />
        </button>
      ))}
    </div>
  );
}
