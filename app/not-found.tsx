import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="text-center max-w-md">
        <div className="text-7xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-2xl font-bold text-fg mb-3">Página no encontrada</h1>
        <p className="text-fg-secondary mb-8">
          La página que buscas no existe o ha sido movida a otra ubicación.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-primary text-white dark:text-slate-900 font-medium text-sm hover:bg-primary-hover transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
