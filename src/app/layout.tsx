import Header from "@/components/Header";
import { fetchData } from "@/utils/fetchData";
import type { Metadata } from "next";
import Script from "next/script";

import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Moises AI",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const globalData = await fetchData('global');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": globalData.siteName,
    "url": "https://moisesai.com",
    "logo": "https://moisesai.com/images/logo.png",
    "sameAs": Object.values(globalData?.social).map(link => link)
  };

  return (
    <html lang="en">
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <body>
        <Header links={globalData?.menu}/>
        <main>{children}</main>
      </body>
    </html>
  );
}