"use client";

import { cn } from "@app/lib/utils";
import { useEffect, useRef, useState } from "react";

interface TerminalLine {
  type: "command" | "output";
  content: string;
  href?: string;
}

export interface TerminalProps {
  commands: string[];
  outputs?: Record<number, string[]>;
  outputLinks?: Record<number, (string | null)[]>;
  username?: string;
  subject?: string;
  className?: string;
  typingSpeed?: number;
  delayBetweenCommands?: number;
  initialDelay?: number;
  clsDelay?: number;
  restartDelay?: number;
}

function renderCommand(command: string) {
  const tokens = command.match(/\S+/g) ?? [];

  return tokens.map((token, index) => {
    const isCommand = index === 0;
    const isFlag = token.startsWith("-") || /^[^=\s]+=.+$/.test(token);

    const color = isCommand
      ? "text-emerald-400"
      : isFlag
        ? "text-neutral-500"
        : "text-amber-400";

    return (
      <span key={`${index}-${token}`} className={color}>
        {index > 0 ? " " : ""}
        {token}
      </span>
    );
  });
}

export function Terminal({
  commands,
  outputs = {},
  outputLinks = {},
  username = "user",
  subject,
  className,
  typingSpeed = 50,
  delayBetweenCommands = 800,
  initialDelay = 500,
  clsDelay = 10_000,
  restartDelay = 1_000,
}: TerminalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [outputIndex, setOutputIndex] = useState(0);

  const [phase, setPhase] = useState<
    | "idle"
    | "typing"
    | "outputting"
    | "betweenCommands"
    | "waitingForCls"
    | "clearing"
  >("idle");

  const currentCommand = commands[commandIndex] ?? "";
  const currentOutputs = outputs[commandIndex] ?? [];

  const isLastCommand = commandIndex === commands.length - 1;

  /*
   * Initial delay before the first command.
   */
  useEffect(() => {
    if (phase !== "idle" || commands.length === 0) return;

    const timer = setTimeout(() => {
      setPhase("typing");
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [phase, initialDelay, commands.length]);

  /*
   * Type the current command.
   */
  useEffect(() => {
    if (phase !== "typing") return;

    if (charIndex < currentCommand.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentCommand.slice(0, charIndex + 1));
        setCharIndex((value) => value + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setLines((previous) => [
        ...previous,
        {
          type: "command",
          content: currentCommand,
        },
      ]);

      setCurrentText("");
      setOutputIndex(0);
      setPhase("outputting");
    }, 150);

    return () => clearTimeout(timer);
  }, [phase, charIndex, currentCommand, typingSpeed]);

  /*
   * Display outputs for the current command.
   */
  useEffect(() => {
    if (phase !== "outputting") return;

    if (outputIndex < currentOutputs.length) {
      const timer = setTimeout(() => {
        const output = currentOutputs[outputIndex];
        const href = outputLinks[commandIndex]?.[outputIndex] ?? undefined;

        setLines((previous) => [
          ...previous,
          {
            type: "output",
            content: output,
            href,
          },
        ]);

        setOutputIndex((value) => value + 1);
      }, 150);

      return () => clearTimeout(timer);
    }

    if (isLastCommand) {
      setPhase("waitingForCls");
    } else {
      setPhase("betweenCommands");
    }
  }, [
    phase,
    outputIndex,
    currentOutputs,
    commandIndex,
    outputLinks,
    isLastCommand,
  ]);

  /*
   * Delay before moving to the next command.
   */
  useEffect(() => {
    if (phase !== "betweenCommands") return;

    const timer = setTimeout(() => {
      setCommandIndex((value) => value + 1);
      setCharIndex(0);
      setOutputIndex(0);
      setCurrentText("");
      setPhase("typing");
    }, delayBetweenCommands);

    return () => clearTimeout(timer);
  }, [phase, delayBetweenCommands]);

  /*
   * Wait before typing cls.
   */
  useEffect(() => {
    if (phase !== "waitingForCls") return;

    const timer = setTimeout(() => {
      setCharIndex(0);
      setCurrentText("");
      setPhase("clearing");
    }, clsDelay);

    return () => clearTimeout(timer);
  }, [phase, clsDelay]);

  /*
   * Type cls.
   */
  useEffect(() => {
    if (phase !== "clearing") return;

    const cls = "cls";

    if (charIndex < cls.length) {
      const timer = setTimeout(() => {
        setCurrentText(cls.slice(0, charIndex + 1));
        setCharIndex((value) => value + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setLines([]);
      setCurrentText("");
      setCommandIndex(0);
      setCharIndex(0);
      setOutputIndex(0);
      setPhase("idle");
    }, restartDelay);

    return () => clearTimeout(timer);
  }, [phase, charIndex, typingSpeed, restartDelay]);

  /*
   * Keep the terminal scrolled to the bottom.
   */
  useEffect(() => {
    const element = contentRef.current;

    if (!element) return;

    const frame = requestAnimationFrame(() => {
      element.scrollTo({
        top: element.scrollHeight,
        behavior: "instant",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [lines, currentText, phase]);

  /*
   * Terminal cursor.
   * Blinks between 0% and 100% opacity only when waiting.
   */
  const cursor = () => (
    <span
      className={cn("ml-0.5 inline-block h-4 w-2 bg-neutral-300 align-middle")}
    />
  );

  const prompt = (
    <span className="text-neutral-500">
      <span className="text-sky-500">
        [ {username}@terminal {`~${subject ? `${subject} ` : " "}`}]{" "}
      </span>
      {/* {subject && <span className="text-sky-500">{subject} ]</span>} */}
      <span className="text-neutral-500">$ </span>
    </span>
  );

  return (
    <div className={cn("mx-auto w-full! font-mono text-xs", className)}>
      <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 shadow-2xl">
        <div className="flex items-center gap-2 bg-neutral-800 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/40" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/40" />
            <div className="h-3 w-3 rounded-full bg-green-500/40" />
          </div>

          <div className="flex-1 text-start">
            <span className="truncate text-neutral-400 text-xs">
              {username}
              {subject && ` - ${subject}`}
            </span>
          </div>
        </div>

        <div
          ref={contentRef}
          className="no-visible-scrollbar h-80 overflow-y-auto p-4 font-mono"
        >
          {lines.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap leading-relaxed">
              {line.type === "command" ? (
                <>
                  {prompt}
                  {renderCommand(line.content)}
                </>
              ) : line.href ? (
                <a
                  href={line.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
                >
                  {line.content}
                </a>
              ) : (
                <span className="text-neutral-400">{line.content}</span>
              )}
            </div>
          ))}

          {(phase === "typing" || phase === "clearing") && (
            <div className="whitespace-pre-wrap leading-relaxed">
              {prompt}

              {phase === "typing" ? (
                renderCommand(currentText)
              ) : (
                <span className="text-emerald-400">{currentText}</span>
              )}

              {cursor()}
            </div>
          )}

          {phase === "waitingForCls" && (
            <div className="whitespace-pre-wrap leading-relaxed">
              {prompt}
              {cursor()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Terminal;
