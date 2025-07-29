"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BRAND } from "@/utils/globalDesign";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/reservas");
  }, [router]);
  return (
    <main className="min-h-screen bg-pure-white text-deep-black">
      <h1 className="gradient-text text-4xl font-bold text-center mb-8">
        {BRAND.texts.headings.notFound}
      </h1>
      <p className="text-deep-black text-center mb-8">
        {BRAND.texts.errors.notFound}
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => router.replace("/")}
          className="professional-btn"
        >
          {BRAND.texts.buttons.goHome}
        </button>
      </div>
      <div className="elegant-card p-4 mt-8 max-w-md mx-auto">
        <p className="text-deep-black">
          {BRAND.texts.errors.contactSupport}
        </p>
      </div>
    </main>
  );
}
