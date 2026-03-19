"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import LogoFull from "@/components/LogoFull";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Demo-Modus: Jeder Login leitet zum Dashboard weiter
    // Wird später durch Firebase Auth ersetzt
    if (!email || !password) {
      setError("Bitte E-Mail und Passwort eingeben.");
      setIsLoading(false);
      return;
    }

    // Simulate short loading, then redirect
    setTimeout(() => {
      // Store demo session
      localStorage.setItem("kuaawo_user", JSON.stringify({
        email,
        name: email.split("@")[0],
        loggedIn: true,
      }));
      router.push("/dashboard");
    }, 800);
  };

  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card glass-panel" style={{ opacity: 0, animation: "fadeIn 500ms ease forwards" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--text-secondary)", marginBottom: "var(--spacing-md)", fontSize: "var(--text-sm)" }}>
          <ArrowLeft size={16} /> Zurück zur Startseite
        </Link>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "var(--spacing-sm)" }}>
          <LogoFull width={200} />
        </div>
        <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--accent)", marginBottom: "var(--spacing-xs)" }}>Willkommen zurück</h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "var(--spacing-md)" }}>Melde dich im KuAaWo Mitglieder-Portal an.</p>

        {error && <div style={{ background: "rgba(255, 50, 50, 0.1)", color: "var(--danger)", padding: "0.75rem", borderRadius: "var(--radius-sm)", marginBottom: "var(--spacing-md)", fontSize: "var(--text-sm)", border: "1px solid rgba(255, 50, 50, 0.2)" }}>
          {error}
        </div>}

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
          <div className="input-group">
            <label className="input-label" htmlFor="email">E-Mail Adresse</label>
            <input
              id="email"
              type="email"
              placeholder="mitglied@kuaawo.org"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="password">Passwort</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "var(--spacing-xs)" }} disabled={isLoading}>
            {isLoading ? <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> : "Anmelden"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "var(--spacing-md)", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
          Noch kein Mitglied? <Link href="/register" style={{ color: "var(--accent)", fontWeight: 500 }}>Hier bewerben</Link>
        </p>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}
