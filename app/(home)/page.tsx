import CodeImage from "@assets/images/code.png";
import HomeTerminal from "@components/custom/HomeTerminal";
import SpotifyWidget from "@components/custom/SpotifyWidget";
import StaticTerminal from "@components/custom/StaticTerminal";
import Version from "@components/custom/Version";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#16b2ab08_1px,transparent_1px),linear-gradient(to_bottom,#16b2ab08_1px,transparent_1px)] bg-size-[4rem_4rem]">
        <div className="relative h-full w-full overflow-hidden bg-von-black/50 blur-[6px]">
          <Image
            src={CodeImage}
            className="pointer-events-none relative inset-0 z-0 h-full w-full object-fit opacity-30"
            alt="Hero background"
            loading="eager"
            fill
          />
        </div>
      </div>

      <section className="relative z-10 mx-auto max-w-10xl items-center px-6 py-6 lg:px-10 lg:py-0">
        <div className="grid items-center gap-12 xl:grid-cols-2 xl:gap-8 2xl:px-10">
          <div className="hidden h-full w-full justify-center xl:mt-0 xl:flex">
            <section className="mx-auto w-full px-1 py-20">
              <HomeTerminal className={null} />
            </section>
          </div>

          <div className="space-y-4 px-1 py-5 text-center xl:text-end">
            <Version isCurrent version="REVIEW r@1.0.0" />

            <h1 className="bg-linear-45 from-von-white via-von-teal to-von-white bg-clip-text text-center font-black text-5xl text-transparent leading-none tracking-tighter transition-all duration-300 sm:text-7xl xl:text-right">
              Fumadocs <br />
              base template
            </h1>

            <p className="max-w-xl justify-self-center text-center font-light text-lg text-zinc-400 leading-relaxed transition-all duration-300 md:text-lg xl:justify-self-end xl:text-right">
              This is a base Fumadocs template created by{" "}
              <strong>von Schappler</strong> to help help users to start
              documenting their projects in an easy way!
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4 xl:justify-end">
              <Link
                href="/docs"
                className="rounded-none bg-von-teal px-8 py-4 font-bold font-mono text-von-black transition-all duration-200 hover:rounded-lg hover:bg-von-teal/30 hover:text-von-white"
              >
                [ CHECK_THE_CONCEPT ]
              </Link>

              {process.env.NODE_ENV === 'development' && <Link
                href="/docs/02-dev-only"
                className="border-2 border-von-teal/30 px-8 py-4 font-mono font-semibold text-von-teal transition-all duration-200 hover:rounded-lg hover:bg-von-teal/30 hover:text-von-white"
              >
                [ DEVELOPER'S_REFERENCE ]
              </Link>}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 grid w-full grid-cols-1 items-center justify-center border-zinc-800 border-t-2 bg-von-black px-10 py-10 md:grid-cols-2 md:divide-x-2">
        <h2 className="mb-5 text-center font-extrabold text-3xl text-white tracking-tight sm:text-4xl md:col-span-2">
          Current state of mind
        </h2>
        <div className="flex h-full w-full flex-col justify-center pb-5 leading-relaxed md:px-10 md:pb-0">
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
        <div className="mx-auto rounded-lg border border-foreground/50 bg-von-black p-4 font-mono text-[12px] text-von-teal sm:left-12">
          <SpotifyWidget />
        </div>
      </section>

      <section className="relative z-10 border-zinc-800 border-t-2 bg-von-black py-10">
        <div className="mb-5 text-center">
          <h2 className="font-extrabold text-3xl text-white tracking-tight sm:text-4xl">
            Features
          </h2>
        </div>
        <div className="mx-auto grid max-w-10xl divide-y-2 divide-zinc-800 xl:grid-cols-3 xl:divide-x-2 xl:divide-y-0">
          <div className="group col-span-3 p-10 transition-colors duration-300 hover:bg-zinc-900/50 md:col-span-1 lg:p-14">
            <div className="mb-6 font-mono text-von-teal text-xs tracking-widest">
              [ CUSTOM_COMPONENTS ]{" "}
            </div>
            <h3 className="mb-4 font-bold text-2xl text-white tracking-tight transition-colors group-hover:text-von-teal">
              External <strong>Fumadocs</strong> dependencies
            </h3>
            <p className="font-light text-zinc-400 leading-relaxed">
              This template uses and documents how to use the external and most
              of the provided <strong>Fumadocs custom components</strong> to
              ensure and allow the best customization as possible!
            </p>
            <div className="mt-2 flex w-full justify-end">
              {process.env.NODE_ENV === 'development' ? <Link
                href="/docs/dev/only"
                className="border-2 border-von-teal/30 px-8 py-4 font-mono font-semibold text-von-teal transition-all duration-200 hover:rounded-lg hover:bg-von-teal/30 hover:text-von-white"
              >
                [ SEE_FUMADOCS_COMPONENTS ]
              </Link> : <Link
                href="link/to/repository"
                className="border-2 border-von-teal/30 px-8 py-4 font-mono font-semibold text-von-teal transition-all duration-200 hover:rounded-lg hover:bg-von-teal/30 hover:text-von-white"
              >
                [ DOWNLOAD_THE_PROJECT ]
              </Link>}
            </div>
          </div>

          <div className="group col-span-3 p-10 transition-colors duration-300 hover:bg-zinc-900/50 md:col-span-1 lg:p-14">
            <div className="mb-6 font-mono text-von-teal text-xs tracking-widest">
              [ TIPS ]{" "}
            </div>
            <h3 className="mb-4 font-bold text-2xl text-white tracking-tight transition-colors group-hover:text-von-teal">
              File system examples
            </h3>
            <p className="font-light text-zinc-400 leading-relaxed">
              In the current revision, there is a total of <strong>three examples</strong>, with both recommended file / folder structure as well as a preview on what to expect as the final result for each use case.
            </p>
            <div className="mt-2 flex w-full justify-end">
              <Link
                href="/docs/04-examples"
                className="border-2 border-von-teal/30 px-8 py-4 font-mono font-semibold text-von-teal transition-all duration-200 hover:rounded-lg hover:bg-von-teal/30 hover:text-von-white"
              >
                [ CHECK_EXAMPLES ]
              </Link>
            </div>
          </div>

          <div className="group col-span-3 p-10 transition-colors duration-300 hover:bg-zinc-900/50 md:col-span-1 lg:p-14">
            <div className="mb-6 font-mono text-von-teal text-xs tracking-widest">
              [ LICENSES_OF_USE ]
            </div>
            <h3 className="mb-4 font-bold text-2xl text-white tracking-tight transition-colors group-hover:text-von-teal">
              EULA and GNU
            </h3>
            <p className="font-light text-zinc-400 leading-relaxed">
              This is a base template free to use, as long as the specifications in our license section are fulfilled. Both licenses are already added to the project, so you don't need to search for them anywhere!
            </p>
            <div className="mt-2 flex w-full justify-end">
              <Link
                href="/docs/01-licenses/01-eula"
                className="border-2 border-von-teal/30 px-8 py-4 font-mono font-semibold text-von-teal transition-all duration-200 hover:rounded-lg hover:bg-von-teal/30 hover:text-von-white"
              >
                [ READ_THE_LICENSES ]
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            href="/docs"
            className="relative w-fit rounded-none bg-von-teal px-8 py-4 font-bold font-mono text-von-black transition-all duration-200 hover:rounded-lg hover:bg-von-teal/30 hover:text-von-white"
          >
            [ VIEW_ALL ]
          </Link>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <StaticTerminal className={null}>
          <div className="space-y-6 p-8 text-center md:p-12">
            <h2 className="font-extrabold text-3xl text-white tracking-tight sm:text-4xl">
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
                className="rounded-none bg-von-teal px-8 py-4 font-bold font-mono text-von-black transition-all duration-200 hover:rounded-lg hover:bg-von-teal/30 hover:text-von-white"
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
