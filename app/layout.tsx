import "katex/dist/katex.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import "@app/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Fumadocs base Template",
  description:
    "A base Fumadocs template created for free, so developers and use as inspiration for their Fumadocs application.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className="dark flex min-h-screen flex-col bg-linear-65 from-von-black/15 via-von-gray/15 to-90%' to-von-black/15 text-white antialiased selection:bg-von-white/10 selection:text-von-teal/75">
        <RootProvider
          theme={{
            defaultTheme: "dark",
            enabled: true,
            enableColorScheme: true,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
};
export default RootLayout;
