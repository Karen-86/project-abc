import type { Metadata } from "next";
import { Space_Grotesk, Krona_One, Geist  } from 'next/font/google';
import "@/styles/index.css";
import AuthProvider from "@/contexts/AuthContext";
import ApiProvider from "@/contexts/ApiContext";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ['latin'],
  weight: ['400','500','600', '700'],
});

const kronaOne = Krona_One({
  variable: "--font-krona-one",
  subsets: ['latin'],
  weight: ['400'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kronaOne.variable} ${spaceGrotesk.variable}  ${geistSans.variable}  antialiased`}>
        <AuthProvider>
          <ApiProvider>{children}</ApiProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
