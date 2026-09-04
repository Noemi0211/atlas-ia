import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Shell } from "@/components/layout/Shell";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { I18nProvider } from "@/lib/i18n/provider";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocaleFromParams } from "@/lib/i18n/server";
import {
  SUPPORTED_LOCALES,
  buildLanguagesAlternates,
  localeToIntl,
  prefixPath,
  type Locale,
} from "@/lib/i18n/config";
import { SITE_CONFIG } from "@/lib/constants";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#2563eb",
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = getLocaleFromParams(lang);
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: "Atlas IA — Aprende Inteligencia Artificial",
      template: "%s | Atlas IA",
    },
    description:
      locale === "en"
        ? t.home.subtitle1
        : "La mejor plataforma en español para aprender Inteligencia Artificial desde cero hasta nivel avanzado. Diseñada para docentes, profesionales y todas las personas interesadas.",
    keywords: [
      "inteligencia artificial",
      "IA",
      "machine learning",
      "deep learning",
      "prompting",
      "educación",
      "español",
    ],
    alternates: {
      canonical: prefixPath("/", locale),
      languages: buildLanguagesAlternates("/"),
    },
    openGraph: {
      type: "website",
      locale: localeToIntl(locale),
      url: new URL(prefixPath("/", locale), SITE_CONFIG.url),
      siteName: SITE_CONFIG.name,
      title: "Atlas IA — Aprende Inteligencia Artificial",
      description: t.home.subtitle1,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Atlas IA — Aprende Inteligencia Artificial",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Atlas IA — Aprende Inteligencia Artificial",
      description: t.home.subtitle1,
      images: ["/og.png"],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Atlas IA",
    },
    icons: {
      apple: "/icons/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const locale = getLocaleFromParams(lang);

  return (
    <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased">
        <I18nProvider locale={locale}>
          <AuthProvider>
            <Shell>{children}</Shell>
          </AuthProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
