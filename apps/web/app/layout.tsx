"use client";

import { useEffect } from "react";
import { ThemeManager } from "sglmps/lib";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    ThemeManager.init();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
