import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPaypal,
  FaXTwitter,
} from "react-icons/fa6";
import { IoLogoXbox } from "react-icons/io5";
import {
  SiBattledotnet,
  SiOrigin,
  SiSpotify,
  SiSteam,
  SiTwitch,
  SiUbisoft,
  SiYoutubegaming,
} from "react-icons/si";
import { v4 as uuid } from "uuid";

// ensures each item from the list has a unique key
const addId = (arr) => {
  const result = arr.map((item) => {
    return {
      ...item,
      id: uuid(),
    };
  });
  return result;
};

const FOOTER_SOCIALS = [
  {
    href: "https://rebrand.ly/vonDiscord",
    icon: <FaDiscord size={20} />,
  },
  {
    href: "https://rebrand.ly/vonFacebook",
    icon: <FaFacebook size={20} />,
  },
  {
    href: "https://rebrand.ly/vonGithub",
    icon: <FaGithub size={20} />,
  },
  {
    href: "https://rebrand.ly/vonInstagram",
    icon: <FaInstagram size={20} />,
  },
  {
    href: "https://rebrand.ly/vonTwitter",
    icon: <FaXTwitter size={20} />,
  },
];

const FOOTER_CHANNELS = [
  {
    href: "https://rebrand.ly/vonTwitch",
    icon: <SiTwitch size={20} />,
  },
  {
    href: "https://rebrand.ly/vonYoutube",
    icon: <SiYoutubegaming size={20} />,
  },
  {
    href: "https://rebrand.ly/vonPodcast",
    icon: <SiSpotify size={20} />,
  },
];

const FOOTER_PROFILES = [
  {
    href: "https://rebrand.ly/vonBlizzard",
    icon: <SiBattledotnet size={20} />,
  },
  {
    href: "https://rebrand.ly/vonOrigin",
    icon: <SiOrigin size={20} />,
  },
  {
    href: "https://rebrand.ly/vonSteam",
    icon: <SiSteam size={20} />,
  },
  {
    href: "https://rebrand.ly/vonUplay",
    icon: <SiUbisoft size={20} />,
  },
  {
    href: "https://rebrand.ly/vonXLive",
    icon: <IoLogoXbox size={20} />,
  },
];

const FOOTER_SUPPORT = [
  {
    href: "https://rebrand.ly/vonPayPal",
    icon: <FaPaypal size={20} />,
  },
];

const FOOTER_SOCIALS_LINKS = addId(FOOTER_SOCIALS);
const FOOTER_CHANNELS_LINKS = addId(FOOTER_CHANNELS);
const FOOTER_PROFILES_LINKS = addId(FOOTER_PROFILES);
const FOOTER_SUPPORT_LINKS = addId(FOOTER_SUPPORT);

export {
  FOOTER_CHANNELS_LINKS,
  FOOTER_PROFILES_LINKS,
  FOOTER_SOCIALS_LINKS,
  FOOTER_SUPPORT_LINKS,
};
