export const commands = ["pnpm add express", `pnpm add nodemon -D`, "pnpm dev"];

export const outputs = {
  0: ["Installing express...", "Express installed!"],
  1: ["Installing nodemon...", "Nodemon installed!"],
  2: ["Server is running on", "http://localhost:5000"],
};

export const outputLinks = {
  0: null,
  1: null,
  2: [null, "http://localhost:5000"],
};

export const username = "user";

export const subject = "subject";

export const typingSpeed = 50;

export const initialDelay = 500;

export const delayBetweenCommands = 800;

export const clsDelay = 10000;

export const restartDelay = 1000;
