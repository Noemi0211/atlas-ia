import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
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
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-fg mb-3">Plataforma</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/bloques" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                  Bloques
                </Link>
              </li>
              <li>
                <Link href="/glosario" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                  Glosario
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-fg mb-3">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                  Roadmap.sh
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-fg mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-fg-muted">Privacidad</span>
              </li>
              <li>
                <span className="text-sm text-fg-muted">Términos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col items-center gap-2 text-xs text-fg-muted">
          <p>&copy; 2026 Atlas IA por Noemí Celaya Mingot</p>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-fg-secondary transition-colors"
            aria-label="Licencia Creative Commons CC BY-NC-SA 4.0"
          >
            <Image
              src="/icons/cc_by_nc_sa.png"
              alt=""
              width={52}
              height={45}
              className="h-5 w-auto shrink-0"
              aria-hidden="true"
            />
            Licencia Creative Commons CC BY-NC-SA 4.0
          </a>
        </div>
      </div>
    </footer>
  );
}
