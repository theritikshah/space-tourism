import "../styles/globals.scss";

import Navbar from "./components/Navbar";

export const metadata = {
  title: "Frontend Mentor | Space tourism website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <body>
        <Navbar />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
