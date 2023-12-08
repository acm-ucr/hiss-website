/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "HiSS at UCR",
  description: "Highlander Statistics Society Official Website",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        <div className="w-full text-hiss-black flex flex-col  mt-16 md:mt-[8vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
