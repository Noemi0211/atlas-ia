"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { useI18n } from "@/lib/i18n/provider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-bg-secondary/50" role="contentinfo">
      <div className="max-w-wide mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center" aria-hidden="true">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <span className="font-bold text-fg">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm text-fg-secondary leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-fg mb-3">{t.footer.plataforma}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/bloques" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                  {t.footer.bloques}
                </Link>
              </li>
              <li>
                <Link href="/glosario" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                  {t.footer.glosario}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-fg mb-3">{t.footer.recursos}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/roadmap" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                  {t.roadmap.title}
                </Link>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-fg mb-3">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacidad" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                  {t.footer.privacidad}
                </Link>
              </li>
              <li>
                <Link href="/uso-de-ia" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                  {t.footer.usoIa}
                </Link>
              </li>
              <li>
                <span className="text-sm text-fg-muted">{t.footer.terminos}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col items-center gap-2 text-xs text-fg-muted">
          <p>&copy; 2026 Atlas IA {t.footer.copyright}</p>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-fg-secondary transition-colors"
            aria-label={t.footer.licenciaAria}
          >
            <Image
              src="/icons/cc_by_nc_sa.png"
              alt=""
              width={52}
              height={45}
              className="h-5 w-auto shrink-0"
              aria-hidden="true"
            />
            {t.footer.licencia}
          </a>
        </div>
      </div>
    </footer>
  );
}
