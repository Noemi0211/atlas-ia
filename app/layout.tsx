import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Shell } from "@/components/layout/Shell";
import { AuthProvider } from "@/components/auth/AuthProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Atlas IA — Aprende Inteligencia Artificial",
    template: "%s | Atlas IA",
  },
  description:
    "La mejor plataforma en español para aprender Inteligencia Artificial desde cero hasta nivel avanzado. Diseñada para docentes, profesionales y cualquier persona.",
  keywords: [
    "inteligencia artificial",
    "IA",
    "machine learning",
    "deep learning",
    "prompting",
    "educación",
    "español",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased">
        <AuthProvider>
          <Shell>{children}</Shell>
        </AuthProvider>
      </body>
    </html>
  );
}
