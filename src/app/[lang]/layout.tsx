import Header from "@/components/Header";
import { fetchData } from "@/utils/fetchData";
import type { Metadata } from "next";

import "@/styles/globals.scss";
import Footer from "@/components/Footer";
import { globalData } from "@/types/global";
import LdJsonScript from "@/components/LdJsonScript";

export const metadata: Metadata = {
  title: "Moises AI",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }]
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>
}>) {

  const language = await params;
  const globalData: globalData = await fetchData('global', language?.lang || "en");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Moises App",
    "url": "https://moisesai.com",
    "logo": "https://moisesai.com/images/logo.png"
  };

  return (
    <html lang={language.lang}>
      <LdJsonScript id="schema" jsonLd={jsonLd} />
      <body>
        <Header links={globalData?.menu} />
        <main>{children}</main>
        <Footer
          {...globalData}
        />
      </body>
    </html>
  );
}