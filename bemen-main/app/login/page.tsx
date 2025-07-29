"use client";
import { supabase } from "@/utils/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BRAND } from "@/utils/globalDesign";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/cliente");
  };

  return (
    <main className="min-h-screen bg-pure-white text-deep-black flex flex-col items-center justify-center">
      <form onSubmit={handleLogin} className="bg-pearl p-8 rounded-xl shadow-lg max-w-sm w-full flex flex-col gap-6">
        <h1 className="gradient-text text-3xl font-bold text-center mb-4">{BRAND.texts.headings.login}</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="luxury-input"
          required
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="luxury-input"
          required
          autoComplete="current-password"
        />
        <Link href="/forgot-password" className="text-gold text-sm text-right hover:underline mb-2">{BRAND.texts.buttons.forgotPassword}</Link>
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        <button type="submit" className="professional-btn w-full text-deep-black bg-gold hover:bg-gold-dark hover:text-pure-white">{BRAND.texts.buttons.signin}</button>
      </form>
    </main>
  );
}
