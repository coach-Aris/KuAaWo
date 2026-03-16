"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Check, CreditCard, Loader2, Music, Shield, Calendar } from "lucide-react";

export default function AboPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setIsLoading(true);
    setError("");

    try {
      // TODO: Replace with actual user data from Firebase Auth
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "demo-user-id",
          email: "demo@kuaawo.org",
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Checkout konnte nicht gestartet werden");
        setIsLoading(false);
      }
    } catch {
      setError("Verbindung fehlgeschlagen. Bitte versuche es erneut.");
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container animate-fade-in" style={{ minHeight: "100vh", padding: "var(--spacing-lg)" }}>
      <div style={{ maxWidth: "560px", width: "100%" }}>
        <Link href="/dashboard" style={{ display: "inline-flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--text-secondary)", marginBottom: "var(--spacing-lg)", fontSize: "var(--text-sm)" }}>
          <ArrowLeft size={16} /> Zurück zum Dashboard
        </Link>

        <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 700, marginBottom: "var(--spacing-xs)", letterSpacing: "-1px" }}>
          Mitgliedschaft aktivieren
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "var(--spacing-lg)", fontSize: "var(--text-lg)" }}>
          Werde aktives Mitglied im Kulturverein Aare Worblaufen.
        </p>

        {/* Plan Card */}
        <div className="glass-panel" style={{ opacity: 0, animation: "fadeIn 500ms ease forwards", border: "1px solid var(--accent)", position: "relative", overflow: "hidden" }}>
          {/* Accent bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--accent)" }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--spacing-md)" }}>
            <div>
              <h2 style={{ fontSize: "var(--text-xl)", fontWeight: 600 }}>Jahresmitgliedschaft</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", marginTop: "0.25rem" }}>Alles inklusive – ein Jahr lang</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: "var(--text-3xl)", fontWeight: 700, color: "var(--accent)" }}>190.–</span>
              <span style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", display: "block" }}>CHF / Jahr</span>
            </div>
          </div>

          {/* Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "var(--spacing-lg)" }}>
            {[
              { icon: <Music size={18} />, text: "Unbegrenzter Bandraum-Zugang" },
              { icon: <Shield size={18} />, text: "Aktives Vereinsmitglied mit Stimmrecht" },
              { icon: <Calendar size={18} />, text: "Zugang zu allen Events & Sitzungen" },
              { icon: <CreditCard size={18} />, text: "Vereinsbeitrag inklusive" },
            ].map((feature) => (
              <div key={feature.text} style={{ display: "flex", alignItems: "center", gap: "var(--spacing-sm)" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "var(--radius-sm)", background: "hsla(210, 80%, 55%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                  {feature.icon}
                </div>
                <span style={{ color: "var(--text-secondary)" }}>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Breakdown */}
          <div style={{ padding: "var(--spacing-sm)", background: "rgba(0,0,0,0.2)", borderRadius: "var(--radius-sm)", marginBottom: "var(--spacing-md)", border: "1px solid var(--glass-border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Vereinsbeitrag</span>
              <span style={{ fontSize: "var(--text-sm)" }}>CHF 30.–</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Bandraum (12 Monate)</span>
              <span style={{ fontSize: "var(--text-sm)" }}>CHF 160.–</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--glass-border)", paddingTop: "0.5rem" }}>
              <span style={{ fontWeight: 600 }}>Total</span>
              <span style={{ fontWeight: 700, color: "var(--accent)" }}>CHF 190.–</span>
            </div>
          </div>

          {error && (
            <div style={{ background: "rgba(255, 50, 50, 0.1)", color: "var(--danger)", padding: "0.75rem", borderRadius: "var(--radius-sm)", marginBottom: "var(--spacing-md)", fontSize: "var(--text-sm)", border: "1px solid rgba(255, 50, 50, 0.2)" }}>
              {error}
            </div>
          )}

          <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="btn btn-primary"
            style={{ width: "100%", padding: "0.9rem", fontSize: "var(--text-base)", fontWeight: 600 }}
          >
            {isLoading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--spacing-xs)" }}>
                <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> Weiterleitung…
              </span>
            ) : (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--spacing-xs)" }}>
                <CreditCard size={18} /> Jetzt Mitglied werden – CHF 190.–/Jahr
              </span>
            )}
          </button>

          <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "var(--text-xs)", marginTop: "var(--spacing-sm)" }}>
            Sichere Zahlung über Stripe. Jederzeit kündbar.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: "var(--spacing-lg)" }}>
          <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--spacing-sm)" }}>Häufige Fragen</h3>
          {[
            { q: "Kann ich jederzeit kündigen?", a: "Ja, dein Abo läuft bis zum Ende der bezahlten Periode weiter." },
            { q: "Welche Zahlungsmethoden werden akzeptiert?", a: "Kreditkarte (Visa, Mastercard), TWINT und weitere." },
            { q: "Was passiert nach der Zahlung?", a: "Dein Mitgliederstatus wird sofort auf «aktiv» gesetzt und du erhältst vollen Zugang." },
          ].map((faq) => (
            <div key={faq.q} style={{ padding: "var(--spacing-sm)", background: "rgba(0,0,0,0.1)", borderRadius: "var(--radius-sm)", marginBottom: "var(--spacing-xs)", border: "1px solid var(--glass-border)" }}>
              <p style={{ fontWeight: 500, marginBottom: "0.25rem" }}>{faq.q}</p>
              <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}
