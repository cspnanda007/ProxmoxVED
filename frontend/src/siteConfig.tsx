import { MessagesSquare, Scroll } from "lucide-react";
import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";

export const basePath = process.env.BASE_PATH;

const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

export const navbarLinks = [
  {
    href: `https://github.com/community-scripts/${basePath}`,
    event: "Github",
    icon: <FaGithub className="h-4 w-4" />,
    text: "Github",
  },
  {
    href: `https://discord.gg/2wvnMDgdnU`,
    event: "Discord",
    icon: <FaDiscord className="h-4 w-4" />,
    text: "Discord",
  },
  {
    href: `https://github.com/community-scripts/${basePath}/blob/main/CHANGELOG.md`,
    event: "Change Log",
    icon: <Scroll className="h-4 w-4" />,
    text: "Change Log",
    mobileHidden: true,
  },
  {
    href: `https://github.com/community-scripts/${basePath}/discussions`,
    event: "Discussions",
    icon: <MessagesSquare className="h-4 w-4" />,
    text: "Discussions",
    mobileHidden: true,
  },
].filter(Boolean) as {
  href: string;
  event: string;
  icon: React.ReactNode;
  text: string;
  mobileHidden?: boolean;
}[];

export const mostPopularScripts = ["post-pve-install", "docker", "homeassistant"];

export const analytics = {
  url: "analytics.proxmoxve-scripts.com",
  token: "aefee1b9-2a12-4ac2-9d82-a63113edc62e",
};