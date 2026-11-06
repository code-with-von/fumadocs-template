import cn from "cnfast";

const Copyright = () => {
  return (
    <div
      className={cn(
        "items-center justify-center gap-0 px-10 text-center font-bold text-von-gray/65 text-xs!",
      )}
    >
      <q>
        *<strong>supporting </strong> this project is not required, but{" "}
        <strong>appreciated</strong>, so we can keep this updates based on your
        support!
      </q>
      <br />
      <br />
      <p>
        Created using <strong>Fumadocs</strong> and{" "}
        <strong>Devin Desktop</strong> / <strong>Visual Studio Code</strong>.
      </p>
      <p>
        Among other technologies used, we can list: <strong>React</strong>,{" "}
        <strong>NextJs</strong>, <strong>TailwindCSS</strong> and{" "}
        <strong>Shadcn</strong>
      </p>
      <p>
        &copy; <strong>vonSchappler </strong> &bull; 2010-
        {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Copyright;

/* 

This website was developed using Vite, React, Shadcn among other technologies.

Visual Studio Code was used as main code editor.

Animations created with the help of @Bahaa.

© 2010-2026

*/
