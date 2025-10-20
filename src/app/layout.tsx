import type { Metadata } from "next";
import { Montserrat, Aboreto } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight:["400","600","800"]
});

const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Stefani Cedro fotografia",
  description:
    "Uma boa fotografia é aquela que comunica um fato,toca o coração e deixa o espectador uma pessoa mudada por tê-la visto. É,em uma palavra, eficácia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_Br">
      <body
        className={`${montserrat.variable} ${aboreto.variable} antialiased`}
      >
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
