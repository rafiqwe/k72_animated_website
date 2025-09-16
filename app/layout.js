import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Stair from "./components/common/Stair";
import Navbar from "./components/navigation/Navber.jsx";
import NavContext from "./contexts/NavContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "k72 animated website",
  description:
    "A visually engaging animated website built with Next.js, featuring custom fonts and smooth page transitions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavContext>
          {/* Page Transition Overlay */}
          <Stair>
            <Navbar />
            {children}
          </Stair>
        </NavContext>
      </body>
    </html>
  );
}
