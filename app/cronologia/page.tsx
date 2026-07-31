import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CronologiaTimeline } from "@/components/interactive/CronologiaTimeline";

export const metadata: Metadata = {
  title: "Cronología de la IA",
  description: "Recorre los hitos más importantes en la historia de la Inteligencia Artificial",
};

export default function CronologiaPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-10">
      <Breadcrumbs items={[{ label: "Cronología" }]} className="mb-6" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-fg mb-3">Cronología de la IA</h1>
        <p className="text-fg-secondary text-lg max-w-2xl">
          Recorre los hitos más importantes en la historia de la Inteligencia Artificial,
          desde el Test de Turing hasta los modelos multimodales actuales.
        </p>
      </div>

      <CronologiaTimeline />
    </div>
  );
}
