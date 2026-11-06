import { FOOTER_CHANNELS_LINKS } from "@ui/footer/constants/footer.jsx";
import cn from "cnfast";
import Link from "next/link";
import { IoVideocam } from "react-icons/io5";

const FooterChannels = () => {
  return (
    <div className={cn("flex w-fit flex-col gap-2 justify-self-center")}>
      <h3>
        <span className={cn("flex items-center justify-center px-5 text-2xl")}>
          <IoVideocam className={cn("mr-2 inline")} /> Online Channels
        </span>
      </h3>
      <hr />
      <div
        className={cn(
          "flex flex-row items-center justify-center gap-4 lg:gap-8",
        )}
      >
        {FOOTER_CHANNELS_LINKS.map((item) => {
          const { id, href, icon } = item;
          return (
            <Link
              href={href}
              target="_blank"
              className={cn(
                "footer-link transition-all duration-300 hover:-rotate-15 hover:scale-110 hover:text-von-teal!",
              )}
              key={`${id}`}
            >
              {icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterChannels;
