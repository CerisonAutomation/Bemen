import { BRAND } from "@/utils/globalDesign";

// Ensure this file is a valid module by exporting a default component
export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-pure-white text-deep-black flex flex-col items-center justify-center gap-8 pt-20">
      <h1 className="gradient-text text-4xl font-bold mb-8 text-center">{BRAND.texts.headings.servicios}</h1>
      {/* Add your servicios content here */}
    </main>
  );
}
