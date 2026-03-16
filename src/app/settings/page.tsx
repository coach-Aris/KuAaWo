"use client";

import Link from "next/link";
import Image from "next/image";
import { Settings as SettingsIcon, LogOut, User, Calendar, Save } from "lucide-react";
import MobileNav from "@/components/MobileNav";

export default function SettingsPage() {
  return (
    <div className="dashboard-layout animate-fade-in">
      <aside className="sidebar">
        <div style={{ fontSize: "var(--text-xl)", fontWeight: 700, letterSpacing: "-1px", marginBottom: "var(--spacing-lg)" }}>
          Ku<span style={{ color: "var(--accent)" }}>Aa</span>Wo
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
          <Link href="/dashboard" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--text-secondary)" }}>
            <User size={18} /> Übersicht
          </Link>
          <Link href="/calendar" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--text-secondary)" }}>
            <Calendar size={18} /> Events & Sitzungen
          </Link>
          <Link href="/settings" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--accent)", fontWeight: 500 }}>
            <SettingsIcon size={18} /> Einstellungen
          </Link>
        </nav>
        <div style={{ marginTop: "auto" }}>
          <button style={{ background: "transparent", border: "none", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "var(--spacing-xs)", cursor: "pointer" }}>
            <LogOut size={18} /> Abmelden
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header style={{ marginBottom: "var(--spacing-sm)" }}>
          <h1 style={{ fontSize: "clamp(1.25rem, 4vw, var(--text-2xl))", fontWeight: 600 }}>Einstellungen</h1>
        </header>

        <div style={{ position: "relative", width: "100%", height: "clamp(100px, 15vw, 200px)", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "var(--spacing-sm)", boxShadow: "var(--shadow-sm)", border: "1px solid var(--glass-border)" }} className="animate-fade-in delay-200">
          <Image src="/hero-image.png" alt="Kulturverein Aare Worblaufen" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <section style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
          <div className="glass-panel delay-100" style={{ opacity: 0, animation: "fadeIn 500ms ease forwards" }}>
            <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--spacing-sm)" }}>Profil-Details</h3>
            <div className="input-group">
              <label className="input-label" htmlFor="name">Vollständiger Name</label>
              <input id="name" type="text" defaultValue="Mitgliedsname" className="input-field" disabled />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="email">E-Mail</label>
              <input id="email" type="email" defaultValue="mitglied@kuaawo.org" className="input-field" disabled />
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", marginTop: "var(--spacing-xs)" }}>
              Kontaktiere die Administration, um Name oder E-Mail zu ändern.
            </p>
          </div>

          <div className="glass-panel delay-200" style={{ opacity: 0, animation: "fadeIn 500ms ease forwards" }}>
            <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--spacing-sm)" }}>Passwort ändern</h3>
            <div className="input-group">
              <label className="input-label" htmlFor="newPassword">Neues Passwort</label>
              <input id="newPassword" type="password" placeholder="••••••••" className="input-field" />
            </div>
            <button className="btn btn-primary" style={{ marginTop: "var(--spacing-sm)" }}>
              <Save size={18} /> Passwort aktualisieren
            </button>
          </div>
        </section>
      </main>

      <MobileNav />
    </div>
  );
}
