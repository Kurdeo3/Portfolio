import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import FloatingIcons from './components/FloatingIcons';

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - Eulogius Kurdeo Hesay",
  description: "-",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden bg-lightTheme`}>
        <FloatingIcons />
        {children}
      </body>
    </html>
  );
}
