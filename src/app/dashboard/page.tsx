"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Calendar, CheckCircle, CreditCard, LogOut, Settings, User, XCircle } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("Mitglied");

  useEffect(() => {
    const stored = localStorage.getItem("kuaawo_user");
    if (stored) {
      const user = JSON.parse(stored);
      setUserName(user.name || "Mitglied");
    }
  }, []);

  // Mock subscription status – will be replaced with Firestore data
  const [subscription] = useState({
    status: "inactive" as "active" | "inactive" | "cancelled",
    currentPeriodEnd: null as string | null, // e.g. "2027-03-15"
    cancelAtPeriodEnd: false,
  });

  const isActive = subscription.status === "active";

  return (
    <div className="dashboard-layout animate-fade-in">
      <aside className="sidebar">
        <div style={{ fontSize: "var(--text-xl)", fontWeight: 700, letterSpacing: "-1px", marginBottom: "var(--spacing-lg)" }}>
          Ku<span style={{ color: "var(--accent)" }}>Aa</span>Wo
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
          <Link href="/dashboard" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--accent)", fontWeight: 500 }}>
            <User size={18} /> Übersicht
          </Link>
          <Link href="/calendar" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--text-secondary)", transition: "color 0.2s" }}>
            <Calendar size={18} /> Events & Sitzungen
          </Link>
          <Link href="/settings" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--text-secondary)", transition: "color 0.2s" }}>
            <Settings size={18} /> Einstellungen
          </Link>
        </nav>
        <div style={{ marginTop: "auto" }}>
          <button onClick={() => { localStorage.removeItem("kuaawo_user"); router.push("/login"); }} style={{ background: "transparent", border: "none", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "var(--spacing-xs)", cursor: "pointer", transition: "color 0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--danger)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <LogOut size={18} /> Abmelden
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--spacing-md)" }}>
          <h1 style={{ fontSize: "var(--text-2xl)", fontWeight: 600 }}>Willkommen, {userName}</h1>
        </header>

        <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "var(--spacing-lg)", boxShadow: "var(--shadow-sm)", border: "1px solid var(--glass-border)" }} className="animate-fade-in delay-200">
          <Image src="/hero-image.png" alt="Kulturverein Aare Worblaufen" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--spacing-md)" }}>
          {/* Subscription Status Card */}
          <div className="glass-panel delay-100" style={{ opacity: 0, animation: "fadeIn 500ms ease forwards" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--spacing-sm)" }}>
              <h3 style={{ fontSize: "var(--text-lg)", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "var(--spacing-xs)" }}>
                <CreditCard size={20} color="var(--accent)" /> Mitgliedschaft
              </h3>
              <span style={{
                background: isActive ? "rgba(50, 205, 100, 0.15)" : "rgba(255, 150, 50, 0.2)",
                color: isActive ? "hsl(145, 70%, 55%)" : "hsl(35, 90%, 65%)",
                padding: "0.25rem 0.75rem",
                borderRadius: "var(--radius-full)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
              }}>
                {isActive ? "Aktiv" : "Inaktiv"}
              </span>
            </div>

            {isActive ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)", color: "hsl(145, 70%, 55%)", marginBottom: "var(--spacing-sm)" }}>
                  <CheckCircle size={18} />
                  <span style={{ fontSize: "var(--text-sm)" }}>Jahresmitgliedschaft aktiv</span>
                </div>

                <div style={{ padding: "var(--spacing-sm)", background: "rgba(0,0,0,0.15)", borderRadius: "var(--radius-sm)", marginBottom: "var(--spacing-sm)", border: "1px solid var(--glass-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Plan</span>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>CHF 190.– / Jahr</span>
                  </div>
                  {subscription.currentPeriodEnd && (
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                      <span style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Nächste Verlängerung</span>
                      <span style={{ fontSize: "var(--text-sm)" }}>
                        {new Date(subscription.currentPeriodEnd).toLocaleDateString("de-CH")}
                      </span>
                    </div>
                  )}
                </div>

                {subscription.cancelAtPeriodEnd && (
                  <p style={{ color: "hsl(35, 90%, 65%)", fontSize: "var(--text-sm)", marginBottom: "var(--spacing-sm)" }}>
                    Dein Abo wird am Ende der Laufzeit gekündigt.
                  </p>
                )}
              </>
            ) : (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--text-secondary)", marginBottom: "var(--spacing-md)" }}>
                  <XCircle size={18} />
                  <span style={{ fontSize: "var(--text-sm)" }}>Noch kein aktives Abo</span>
                </div>

                <div style={{ padding: "var(--spacing-sm)", background: "rgba(0,0,0,0.15)", borderRadius: "var(--radius-sm)", marginBottom: "var(--spacing-md)", border: "1px solid var(--glass-border)" }}>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
                    Mit einer Jahresmitgliedschaft für <strong style={{ color: "var(--accent)" }}>CHF 190.–</strong> erhältst du vollen Zugang zum Bandraum, Events und Stimmrecht im Verein.
                  </p>
                </div>

                <Link href="/dashboard/abo" className="btn btn-primary" style={{ width: "100%", textAlign: "center" }}>
                  Jetzt Mitglied werden
                </Link>
              </>
            )}
          </div>

          {/* Next Event Card */}
          <div className="glass-panel delay-200" style={{ opacity: 0, animation: "fadeIn 500ms ease forwards" }}>
            <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--spacing-sm)", display: "flex", alignItems: "center", gap: "var(--spacing-xs)" }}>
              <Calendar size={20} color="var(--accent)" /> Nächstes Event
            </h3>
            <div style={{ padding: "var(--spacing-sm)", background: "rgba(0,0,0,0.2)", borderRadius: "var(--radius-sm)", border: "1px left solid var(--accent)" }}>
              <p style={{ color: "var(--accent)", fontSize: "var(--text-sm)", fontWeight: 600, marginBottom: "0.25rem" }}>15. Nov 2026</p>
              <p style={{ fontSize: "var(--text-base)", fontWeight: 500 }}>Generalversammlung</p>
              <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", marginTop: "0.25rem" }}>18:00 - Gesamthalle</p>
            </div>
            <Link href="/calendar" className="btn btn-secondary" style={{ marginTop: "var(--spacing-md)", width: "100%" }}>
              Gesamten Kalender ansehen
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
