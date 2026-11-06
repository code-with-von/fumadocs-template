"use client";

import FooterChannels from "@ui/footer/components/FooterChannels";
import FooterCopyright from "@ui/footer/components/FooterCopyright";
import FooterProfiles from "@ui/footer/components/FooterProfiles";
import FooterSocials from "@ui/footer/components/FooterSocials";
import FooterSupport from "@ui/footer/components/FooterSupport";
import cn from "cnfast";

const FooterMain = () => {
  return (
    <footer className="flex! flex-col! gap-6!">
      <div
        className={cn(
          "flex flex-col items-center justify-evenly gap-10 px-10 pt-4 lg:flex-row lg:gap-4",
        )}
      >
        <FooterSocials />
        <FooterProfiles />
        <FooterChannels />
        <FooterSupport />
      </div>
      <hr className={cn("mx-auto my-2 w-[50%]")} />
      <FooterCopyright />
    </footer>
  );
};

export default FooterMain;
