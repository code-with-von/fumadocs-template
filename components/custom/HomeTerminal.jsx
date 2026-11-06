"use client";

import BaseTerminal from "@components/ui/terminal";
import { commands, outputLinks, outputs } from "@constants/terminalHome.config";

const HomeTerminal = ({
  username = "vonSchappler",
  subject = "fd-template",
  className,
}) => {
  return (
    <BaseTerminal
      commands={commands}
      outputs={outputs}
      outputLinks={outputLinks}
      username={username}
      subject={subject}
      className={className}
      typingSpeed={50}
      initialDelay={500}
      delayBetweenCommands={800}
      clsDelay={10000}
      restartDelay={1000}
    />
  );
};

export default HomeTerminal;
