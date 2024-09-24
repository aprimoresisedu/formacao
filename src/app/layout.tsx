import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "2 Avisos Importantes",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MMHLWBJ2')
        `}} />
      </head>
      <body className={poppins.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMHLWBJ2"
          height="0" width="0"></iframe></noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
