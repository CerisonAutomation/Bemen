"use client";

import { BRAND } from "@/utils/globalDesign";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-pure-white text-deep-black flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-4 pt-12 pb-8">
        <Image
          src="/images/logo.png"
          alt="BEMEN Logo"
          width={120}
          height={120}
          className="logo-black mb-6"
        />
        <h1 className="gradient-text text-6xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-lg text-center">
          {BRAND.name}
        </h1>
        <div className="flex items-center gap-2 text-gold font-semibold mb-2">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
            <circle cx="12" cy="9" r="2.5"></circle>
          </svg>
          <span className="text-deep-black">{BRAND.address}</span>
        </div>
        <p className="italic text-2xl text-deep-black mb-4 font-serif text-center">
          "{BRAND.tagline}"
        </p>
        <p className="text-lg text-deep-black max-w-2xl mb-8 font-sans text-center">
          {BRAND.description}
        </p>
        {/* Business Hours Card */}
        <div className="elegant-card">
          <h3 className="font-serif font-bold text-lg mb-4 text-gold">
            Horarios de atención
          </h3>
          <div className="space-y-2 text-base">
            {BRAND.businessHours.map((h) => (
              <div className="flex justify-between" key={h.day}>
                <span className="text-pearl">{h.day}</span>
                <span
                  className={`font-semibold ${
                    h.hours === "Cerrado"
                      ? "text-goldivory"
                      : "text-gold"
                  }`}
                >
                  {h.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
