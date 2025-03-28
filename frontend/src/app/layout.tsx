import { basePath } from "@/siteConfig";
import "@/styles/globals.css";

import { Geist } from "next/font/google";

export const metadata = {
  title: "Proxmox VE Helper-Scripts",
  generator: "Next.js",
  applicationName: "Proxmox VE Helper-Scripts",
  referrer: "origin-when-cross-origin",
  keywords: ["Proxmox VE", "Helper-Scripts", "tteck", "helper", "scripts", "proxmox", "VE"],
  authors: { name: "Bram Suurd" },
  creator: "Bram Suurd",
  publisher: "Community Scripts",
  description:
    "Proxmox VE Helper-Scripts (Community). Featuring over 200+ scripts to help you manage your Proxmox VE environment.",
  favicon: "/app/favicon.ico",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(`https://community-scripts.github.io/${basePath}/`),
  openGraph: {
    title: "Proxmox VE Helper-Scripts",
    description:
      "Proxmox VE Helper-Scripts (Community). Featuring over 200+ scripts to help you manage your Proxmox VE environment.",
    url: "/defaultimg.png",
    images: [
      {
        url: `https://community-scripts.github.io/${basePath}/defaultimg.png`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body>{children}</body>
		</html>
	);
}
