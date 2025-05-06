import { Metadata, Viewport } from "next";
import "../styles/global.css";
import { Poppins } from "next/font/google";
import Providers from "sglmps/providers";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shuffle.shinjith.dev"),
  title: "Shuffle Glimpse",
  description:
    "Shuffle Glimpse shows your Spotify top tracks, favorite artists, and listening habits. No more waiting for year-end recaps.",
  keywords: [
    "shuffle",
    "glimpse",
    "spotify",
    "wrapped",
    new Date().getFullYear().toString(),
    "recap",
    "summary",
    "tracks",
    "songs",
    "albums",
    "artists",
  ],
  openGraph: {
    url: "https://shuffle.shinjith.dev",
    type: "website",
    title: "Shuffle Glimpse",
    description:
      "Shuffle Glimpse shows your Spotify top tracks, favorite artists, and listening habits. No more waiting for year-end recaps.",
    images: [
      {
        url: "https://shuffle.shinjith.dev/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "shuffle glimpse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shuffle Glimpse",
    description:
      "Shuffle Glimpse shows your Spotify top tracks, favorite artists, and listening habits. No more waiting for year-end recaps.",
    creator: "@ShinjithR",
    site: "@ShinjithR",
    images: [
      {
        url: "https://shuffle.shinjith.dev/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "shuffle glimpse",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "Shuffle Glimpse",
  appleWebApp: {
    title: "Shuffle Glimpse",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
