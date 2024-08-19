import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thomas Hamelin | Portfolio",
  description: "It's my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
      </head>
      <body className="w-screen overflow-hidden">
        <Head>
          <title>Thomas Hamelin | Portfolio</title>
        </Head>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
