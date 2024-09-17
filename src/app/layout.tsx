import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sheard/header/Header";
import Footer from "@/components/sheard/footer/Footer";
import StoreProvider from "./StoreProvider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Chocolate Next App",
  description: "Chocolate app generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <StoreProvider >
        <Header />
        <main className=" container">{children}</main>
        <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
