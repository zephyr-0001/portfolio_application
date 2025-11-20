import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StarBackground from "@/components/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adithya GS | Technical Business Analyst",
  description: "Personal portfolio of Adithya GS, showcasing Enterprise UX projects and product management skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StarBackground />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
