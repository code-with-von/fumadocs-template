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
          {
            type: "menu",
            text: "A menu",
            items: [
              {
                text: "Internal link",
                description:
                  "Internal link description (will render the 404 if you click here, as this page does not exist and was added just to showcase how the menu works)",
                url: "/b-link",
                icon: <LucideHome />,
              },
              {
                text: "External link",
                description:
                  "External link description (will open google.com, as it was just added to showcase how menu work)",
                url: "https://google.com",
              },
            ],
          },
        ]}
      >
        <main className="grow">{children}</main>
        <FooterMain />
      </HomeLayout>
    </>
  );
}
