"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, CreditCard, Loader2, Music, Shield, Calendar } from "lucide-react";
import MobileNav from "@/components/MobileNav";

export default function AboPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setIsLoading(true);
    setError("");

    try {
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
    <div style={{ minHeight: "100vh", padding: "var(--spacing-sm)", paddingBottom: "80px" }} className="animate-fade-in">
      <div style={{ maxWidth: "560px", width: "100%", margin: "0 auto" }}>
        <Link href="/dashboard" style={{ display: "inline-flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--text-secondary)", marginBottom: "var(--spacing-sm)", fontSize: "var(--text-sm)" }}>
          <ArrowLeft size={16} /> Zurück zum Dashboard
        </Link>

        <h1 style={{ fontSize: "clamp(1.5rem, 5vw, var(--text-3xl))", fontWeight: 700, marginBottom: "var(--spacing-xs)", letterSpacing: "-1px" }}>
          Mitgliedschaft aktivieren
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "var(--spacing-sm)", fontSize: "var(--text-base)" }}>
          Werde aktives Mitglied im Kulturverein Aare Worblaufen.
        </p>

        {/* Plan Card */}
        <div className="glass-panel" style={{ opacity: 0, animation: "fadeIn 500ms ease forwards", border: "1px solid var(--accent)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--accent)" }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--spacing-sm)", flexWrap: "wrap", gap: "0.5rem" }}>
            <div>
              <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 600, marginBottom: "0.15rem" }}>Jahresmitgliedschaft</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-xs)" }}>Alles inklusive – ein Jahr lang</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: "clamp(1.5rem, 5vw, var(--text-3xl))", fontWeight: 700, color: "var(--accent)" }}>190.–</span>
              <span style={{ color: "var(--text-secondary)", fontSize: "var(--text-xs)", display: "block" }}>CHF / Jahr</span>
            </div>
          </div>

          {/* Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "var(--spacing-sm)" }}>
            {[
              { icon: <Music size={16} />, text: "Unbegrenzter Bandraum-Zugang" },
              { icon: <Shield size={16} />, text: "Aktives Vereinsmitglied mit Stimmrecht" },
              { icon: <Calendar size={16} />, text: "Zugang zu allen Events & Sitzungen" },
              { icon: <CreditCard size={16} />, text: "Vereinsbeitrag inklusive" },
            ].map((feature) => (
              <div key={feature.text} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "var(--radius-sm)", background: "hsla(210, 80%, 55%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                  {feature.icon}
                </div>
                <span style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Breakdown */}
          <div style={{ padding: "0.75rem", background: "rgba(0,0,0,0.2)", borderRadius: "var(--radius-sm)", marginBottom: "var(--spacing-sm)", border: "1px solid var(--glass-border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
              <span style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Vereinsbeitrag</span>
              <span style={{ fontSize: "var(--text-sm)" }}>CHF 30.–</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
              <span style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Bandraum (12 Monate)</span>
              <span style={{ fontSize: "var(--text-sm)" }}>CHF 160.–</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--glass-border)", paddingTop: "0.4rem" }}>
              <span style={{ fontWeight: 600 }}>Total</span>
              <span style={{ fontWeight: 700, color: "var(--accent)" }}>CHF 190.–</span>
            </div>
          </div>

          {error && (
            <div style={{ background: "rgba(255, 50, 50, 0.1)", color: "var(--danger)", padding: "0.75rem", borderRadius: "var(--radius-sm)", marginBottom: "var(--spacing-sm)", fontSize: "var(--text-sm)", border: "1px solid rgba(255, 50, 50, 0.2)" }}>
              {error}
            </div>
          )}

          <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="btn btn-primary"
            style={{ width: "100%", padding: "0.85rem", fontSize: "var(--text-sm)", fontWeight: 600 }}
          >
            {isLoading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--spacing-xs)" }}>
                <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> Weiterleitung…
              </span>
            ) : (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--spacing-xs)" }}>
                <CreditCard size={16} /> Jetzt Mitglied werden – CHF 190.–
              </span>
            )}
          </button>

          <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "var(--text-xs)", marginTop: "var(--spacing-xs)" }}>
            Sichere Zahlung über Stripe. Jederzeit kündbar.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: "var(--spacing-sm)" }}>
          <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--spacing-xs)" }}>Häufige Fragen</h3>
          {[
            { q: "Kann ich jederzeit kündigen?", a: "Ja, dein Abo läuft bis zum Ende der bezahlten Periode weiter." },
            { q: "Welche Zahlungsmethoden werden akzeptiert?", a: "Kreditkarte (Visa, Mastercard), TWINT und weitere." },
            { q: "Was passiert nach der Zahlung?", a: "Dein Mitgliederstatus wird sofort auf «aktiv» gesetzt und du erhältst vollen Zugang." },
          ].map((faq) => (
            <div key={faq.q} style={{ padding: "0.75rem", background: "rgba(0,0,0,0.1)", borderRadius: "var(--radius-sm)", marginBottom: "0.5rem", border: "1px solid var(--glass-border)" }}>
              <p style={{ fontWeight: 500, marginBottom: "0.25rem", fontSize: "var(--text-sm)" }}>{faq.q}</p>
              <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-xs)" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <MobileNav />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}
