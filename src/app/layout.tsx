import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import './global.css'

// Fuente de texto Montserrat con soporte para caracteres latinos
const montserrat = Montserrat({ subsets: ["latin"] });

// Metadatos de la aplicación
export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  icons: {
    icon: "/favicon.ico"
  }
};

// Componente principal que envuelve a toda la aplicación
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-app`}>
        {children}
      </body>
    </html>
  );
}