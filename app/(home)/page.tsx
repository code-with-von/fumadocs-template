import CodeImage from "@assets/images/code.png";
import HomeTerminal from "@components/custom/HomeTerminal";
import SpotifyWidget from "@components/custom/SpotifyWidget";
import StaticTerminal from "@components/custom/StaticTerminal";
import Version from "@components/custom/Version";
import settings from "@constants/env";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#16b2ab08_1px,transparent_1px),linear-gradient(to_bottom,#16b2ab08_1px,transparent_1px)] bg-size-[4rem_4rem]">
        <div className="bg-von-black/50 relative size-full overflow-hidden blur-[6px]">
          <Image
            src={CodeImage}
            className="object-fit pointer-events-none relative inset-0 z-0 size-full opacity-30"
            alt="Hero background"
            loading="eager"
            fill
          />
        </div>
      </div>

      <section className="max-w-10xl relative z-10 mx-auto items-center p-6 lg:px-10 lg:py-0">
        <div className="grid items-center gap-12 xl:grid-cols-2 xl:gap-8 2xl:px-10">
          <div className="hidden size-full justify-center xl:mt-0 xl:flex">
            <section className="mx-auto w-full px-1 py-20">
              <HomeTerminal className={null} />
            </section>
          </div>

          <div className="space-y-4 px-1 py-5 text-center xl:text-end">
            <Version isCurrent version="REVIEW r@1.1.0" />

            <h1 className="from-von-white via-von-teal to-von-white bg-linear-45 bg-clip-text text-center text-5xl leading-none font-black tracking-tighter text-transparent transition-all duration-300 sm:text-7xl xl:text-right">
              Fumadocs <br />
              base template
            </h1>

            <p className="max-w-xl justify-self-center text-center text-lg leading-relaxed font-light text-zinc-400 transition-all duration-300 md:text-lg xl:justify-self-end xl:text-right">
              This is a base Fumadocs template created by{" "}
              <strong>von Schappler</strong> to help help users to start
              documenting their projects in an easy way!
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4 xl:justify-end">
              <Link
                href="/docs"
                className="bg-von-teal text-von-black hover:bg-von-teal/30 hover:text-von-white rounded-none px-8 py-4 font-mono font-bold transition-all duration-200 hover:rounded-lg"
              >
                [ CHECK_THE_CONCEPT ]
              </Link>

              {settings.IS_DEV === 'development' && (
                <Link
                  href="/docs/03-plugins/01-fc-comp"
                  className="border-von-teal/30 text-von-teal hover:bg-von-teal/30 hover:text-von-white border-2 px-8 py-4 font-mono font-semibold transition-all duration-200 hover:rounded-lg"
                >
                  [ PLUGINS_REFERENCE ]
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-von-black relative z-10 grid w-full grid-cols-1 items-center justify-center border-t-2 border-zinc-800 p-10 md:grid-cols-2 md:divide-x-2">
        <h2 className="mb-5 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:col-span-2">
          Current state of mind
        </h2>
        <div className="flex size-full flex-col justify-center pb-5 leading-relaxed md:px-10 md:pb-0">
          <p className="text-center md:text-left">
            I'm currently focused on improving my skills in web development and
            streaming. I'm also working on some personal projects that I hope to
            share with you soon.
          </p>
          <br />
          <p className="text-center md:text-left">
            While in this process, I'm jamming to the song listed to the side,
            as music help me not only to express myself, but also to focus on my
            current tasks.
          </p>
        </div>
        <div className="border-foreground/50 bg-von-black text-von-teal mx-auto rounded-lg border p-4 font-mono text-[12px] sm:left-12">
          <SpotifyWidget />
        </div>
      </section>

      <section className="bg-von-black relative z-10 border-t-2 border-zinc-800 py-10">
        <div className="mb-5 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Features
          </h2>
        </div>
        <div className="max-w-10xl mx-auto grid divide-y-2 divide-zinc-800 xl:grid-cols-3 xl:divide-x-2 xl:divide-y-0">
          <div className="group col-span-3 p-10 transition-colors duration-300 hover:bg-zinc-900/50 md:col-span-1 lg:p-14">
            <div className="text-von-teal mb-6 font-mono text-xs tracking-widest">
              [ PLUGINS_AND_CUSTOM_COMPONENTS ]{" "}
            </div>
            <h3 className="group-hover:text-von-teal mb-4 text-2xl font-bold tracking-tight text-white transition-colors">
              <strong>Fumadocs</strong> plugins and other unique components
            </h3>
            <p className="leading-relaxed font-light text-zinc-400">
              This template uses and documents how to use the external and most
              of the provided <strong>Fumadocs custom components</strong> to
              ensure and allow the best customization as possible!
            </p>
            <div className="mt-2 flex w-full justify-end">
              {settings.IS_DEV === 'development' ? (
                <Link
                  href="/docs/03-plugins/01-fc-comp"
                  className="border-von-teal/30 text-von-teal hover:bg-von-teal/30 hover:text-von-white border-2 px-8 py-4 font-mono font-semibold transition-all duration-200 hover:rounded-lg"
                >
                  [ OPEN_PLUGINS_LIST ]
                </Link>
              ) : (
                <Link
                  href="https://github.com/code-with-von/fumadocs-template"
                  className="border-von-teal/30 text-von-teal hover:bg-von-teal/30 hover:text-von-white border-2 px-8 py-4 font-mono font-semibold transition-all duration-200 hover:rounded-lg"
                >
                  [ DOWNLOAD_THE_PROJECT ]
                </Link>
              )}
            </div>
          </div>

          <div className="group col-span-3 p-10 transition-colors duration-300 hover:bg-zinc-900/50 md:col-span-1 lg:p-14">
            <div className="text-von-teal mb-6 font-mono text-xs tracking-widest">
              [ TIPS ]{" "}
            </div>
            <h3 className="group-hover:text-von-teal mb-4 text-2xl font-bold tracking-tight text-white transition-colors">
              File system examples
            </h3>
            <p className="leading-relaxed font-light text-zinc-400">
              In the current revision, there is a total of{" "}
              <strong>three examples</strong>, with both recommended file /
              folder structure as well as a preview on what to expect as the
              final result for each use case.
            </p>
            <div className="mt-2 flex w-full justify-end">
              <Link
                href="/docs/04-examples"
                className="border-von-teal/30 text-von-teal hover:bg-von-teal/30 hover:text-von-white border-2 px-8 py-4 font-mono font-semibold transition-all duration-200 hover:rounded-lg"
              >
                [ CHECK_EXAMPLES ]
              </Link>
            </div>
          </div>

          <div className="group col-span-3 p-10 transition-colors duration-300 hover:bg-zinc-900/50 md:col-span-1 lg:p-14">
            <div className="text-von-teal mb-6 font-mono text-xs tracking-widest">
              [ LICENSES_OF_USE ]
            </div>
            <h3 className="group-hover:text-von-teal mb-4 text-2xl font-bold tracking-tight text-white transition-colors">
              EULA and GNU
            </h3>
            <p className="leading-relaxed font-light text-zinc-400">
              This is a base template free to use, as long as the specifications
              in our license section are fulfilled. Both licenses are already
              added to the project, so you don't need to search for them
              anywhere!
            </p>
            <div className="mt-2 flex w-full justify-end">
              <Link
                href="/docs/01-licenses"
                className="border-von-teal/30 text-von-teal hover:bg-von-teal/30 hover:text-von-white border-2 px-8 py-4 font-mono font-semibold transition-all duration-200 hover:rounded-lg"
              >
                [ READ_THE_LICENSES ]
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            href="/docs"
            className="bg-von-teal text-von-black hover:bg-von-teal/30 hover:text-von-white relative w-fit rounded-none px-8 py-4 font-mono font-bold transition-all duration-200 hover:rounded-lg"
          >
            [ VIEW_ALL ]
          </Link>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <StaticTerminal className={null}>
          <div className="space-y-6 p-8 text-center md:p-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to delve into this world?
            </h2>
            <p className="mx-auto max-w-xl font-light text-zinc-400">
              Check the resources provided by <strong>von Schappler</strong>, by
              clicking on the button below and enjoy what we have to provide
              here or feel free to <strong>provide your feedback</strong> by
              sending us an{" "}
              <Link href="mailto:vonschapper_dev@outlook.com">email</Link>!
            </p>
            <div className="pt-4">
              <Link
                href="/docs"
                className="bg-von-teal text-von-black hover:bg-von-teal/30 hover:text-von-white rounded-none px-8 py-4 font-mono font-bold transition-all duration-200 hover:rounded-lg"
              >
                [ docs --open-all ]
              </Link>
            </div>
          </div>
        </StaticTerminal>
      </section>
    </div>
  );
}
