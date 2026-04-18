import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Izzy Peazy — Aprender ficou mais divertido",
  description:
    "O monitor de estudos inteligente que ajuda crianças do ensino fundamental a tirar dúvidas na hora, estudar no próprio ritmo, e os pais acompanharem toda a evolução em tempo real.",
  openGraph: {
    title: "Izzy Peazy — Aprender ficou mais divertido",
    description:
      "O monitor de estudos inteligente que ajuda crianças do ensino fundamental a tirar dúvidas na hora, estudar no próprio ritmo, e os pais acompanharem toda a evolução em tempo real.",
    siteName: "Izzy Peazy",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izzy Peazy — Aprender ficou mais divertido",
    description:
      "O monitor de estudos inteligente que ajuda crianças do ensino fundamental a tirar dúvidas na hora, estudar no próprio ritmo, e os pais acompanharem toda a evolução em tempo real.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
