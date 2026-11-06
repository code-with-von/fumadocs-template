"use client";

import "@app/global.css";
import Image404 from "@assets/images/404.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import cn from "cnfast";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const PageNotFound = () => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = "Oops - you are trying to peek too far away...";
    }
  }, []);

  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center space-y-8",
      )}
    >
      <h1
        className={cn(
          "bg-linear-45 from-von-white via-von-teal to-von-white bg-clip-text text-center font-black text-6xl text-transparent leading-none tracking-tighter sm:text-7xl xl:text-8xl",
        )}
      >
        404
      </h1>
      <h2
        className={cn(
          "bg-linear-45 from-von-white via-von-teal to-von-white bg-clip-text text-center font-black text-4xl text-transparent leading-none tracking-tighter sm:text-5xl xl:text-6xl",
        )}
      >
        Your curiosity has lead you nowhere...
      </h2>
      {pathName.startsWith("/docs") && (
        <p
          className={cn(
            "max-w-xl justify-self-center text-center font-light text-md text-zinc-400 leading-relaxed md:text-lg",
          )}
        >
          ... and as access to <strong>{pathName}</strong> is either <strong>restrict at this moment</strong> or the page <strong>was not created</strong> yet, <strong>let't play a game</strong>!
        </p>
      )}
      <div
        className={cn(
          "relative h-80 w-80 rounded-full border-2 border-von-teal/10",
        )}
      >
        <Image
          src={Image404}
          alt="404"
          className="h-full w-full rounded-full object-cover"
          fill
        />
      </div>
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 md:gap-4",
        )}
      >
        <p
          className={cn(
            "max-w-xl justify-self-center text-center font-light text-md text-zinc-400 leading-relaxed md:text-lg",
          )}
        >
          {pathName.startsWith("/docs") ? null : (
            <>
              ... so, <strong>let's play a game</strong>!
            </>
          )}
          <br />
          Live or die, <strong>make your choice</strong>!
        </p>
        <div
          className={cn(
            "grid grid-cols-1 items-center justify-center gap-3 md:grid-cols-3 md:gap-10",
          )}
        >
          <button
            onClick={() => router.back()}
            type="button"
            className={cn(
              "cursor-pointer border-2 border-von-teal/30 px-8 py-4 text-center font-mono font-semibold text-von-teal transition-all duration-200 hover:rounded-lg hover:bg-von-teal/30 hover:text-von-white",
            )}
          >
            [ GO_BACK ]
          </button>
          <Link
            href={"/"}
            className={cn(
              "rounded-none bg-von-teal px-8 py-4 text-center font-bold font-mono text-von-black transition-all duration-200 hover:rounded-lg hover:bg-von-teal/30 hover:text-von-white",
            )}
          >
            [ GO_HOME ]
          </Link>
          <Link
            href={"https://vonschappler.github.io/"}
            target="_blank"
            className={cn(
              "cursor-pointer border-2 border-von-teal/30 px-8 py-4 text-center font-mono font-semibold text-von-teal transition-all duration-200 hover:rounded-lg hover:bg-von-teal/30 hover:text-von-white",
            )}
          >
            [ VISIT_MY_WEBSITE ]
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
