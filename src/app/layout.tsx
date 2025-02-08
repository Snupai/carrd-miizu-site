import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://carrd.miizu.de"),
  title: "Hey Miizu! | Carrd",
  description: "Hey Miizu, i was wondering, HOW CAN I CONTACT YOUU??",
  authors: [{ name: "Miizu" }],
  openGraph: {
    title: "Hey Miizu",
    description: "Hey Miizu, i was wondering, HOW CAN I CONTACT YOUU??",
    url: "https://carrd.miizu.de",
    siteName: "Miizu",
    images: [
      {
        url: "https://carrd.miizu.de/carrd-miizu-site.png",
        width: 1194,
        height: 744,
        alt: "Hey Miizu | Carrd",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey Miizu",
    description: "Hey Miizu, i was wondering, HOW CAN I CONTACT YOUU??",
    images: ["https://carrd.miizu.de/carrd-miizu-site.png"],
    creator: "@Miizu",
  },
  icons: [{ rel: "icon", url: "/sentimental.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
