import "../styles/global.css";
import { Poppins } from "next/font/google";
import Providers from "sglmps/providers";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

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
