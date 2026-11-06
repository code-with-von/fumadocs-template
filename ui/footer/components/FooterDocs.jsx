"use client";

import FooterMain from "@ui/footer/components/FooterMain";
import { Footer as FumadocsFooter } from "fumadocs-ui/layouts/notebook/page/slots/footer";

const FooterDocs = () => {
  return (
    <FumadocsFooter>
      <FooterMain />
    </FumadocsFooter>
  );
};

export default FooterDocs;
