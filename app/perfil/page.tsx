import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PerfilContent } from "./PerfilContent";

export const metadata: Metadata = {
  title: "Mi perfil",
  description: "Tu progreso, insignias y estadísticas en Atlas IA",
};

export default function PerfilPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-10">
      <Breadcrumbs items={[{ label: "Mi perfil" }]} className="mb-6" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-fg mb-3">Mi perfil</h1>
        <p className="text-fg-secondary text-lg max-w-2xl">
          Tu progreso, estadísticas e insignias en Atlas IA
        </p>
      </div>

      <PerfilContent />
    </div>
  );
}
