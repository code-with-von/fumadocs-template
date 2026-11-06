import { HomeLayout } from "@layouts/home";
import { baseOptions } from "@lib/layout.shared";
import { FooterMain } from "@ui/footer";
import { Banner } from "fumadocs-ui/components/banner";
import { LucideHome } from "lucide-react";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Banner>Hello World</Banner>
      <HomeLayout
        {...baseOptions()}
        nav={{
          title: "Fumadocs base template",
          transparentMode: "always",
          url: "/",
        }}
        links={[
          {
            icon: <LucideHome />,
            url: "/a-link",
            text: "A link",
          },
        ]}
      >
        <main className="grow">{children}</main>
        <FooterMain />
      </HomeLayout>
    </>
  );
}
