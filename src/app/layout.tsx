"use client";

import { usePathname } from "next/navigation";

import "../styles/globals.scss";

import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const bgImage = () => {
    const backgrounds: { [key: string | number]: string } = {
      destination: "/assets/destination/background-destination",
      crew: "/assets/crew/background-crew",
      technology: "/assets/technology/background-technology",
    };

    const keyword = Object.keys(backgrounds).find((key) =>
      pathname.includes(key)
    );

    if (keyword) {
      const imageUrl = backgrounds[keyword];
      return {
        "--background-image-desktop": `url('${imageUrl}-desktop.jpg')`,
        "--background-image-tablet": `url('${imageUrl}-tablet.jpg')`,
        "--background-image-mobile": `url('${imageUrl}-mobile.jpg')`,
      } as React.CSSProperties;
    }

    return {};
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/favicon-32x32.png"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair"
          rel="stylesheet"
        />
      </head>
      <body style={bgImage()}>
        <Navbar />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
