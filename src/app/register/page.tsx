"use client";

import Link from "next/link";
import { useState } from "react";
// import { auth, db } from "@/lib/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // await setDoc(doc(db, "users", userCredential.user.uid), {
      //   name,
      //   email,
      //   role: "member",
      //   joinedAt: new Date().toISOString()
      // });
      console.log("Registration submitted", name, email);
      setTimeout(() => setIsLoading(false), 1000);
    } catch (err: any) {
      setError(err.message || "Registrierung fehlgeschlagen");
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card glass-panel" style={{ opacity: 0, animation: "fadeIn 500ms ease forwards" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--text-secondary)", marginBottom: "var(--spacing-md)", fontSize: "var(--text-sm)" }}>
          <ArrowLeft size={16} /> Zurück zur Startseite
        </Link>
        <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--accent)", marginBottom: "var(--spacing-xs)" }}>Werde Teil von KuAaWo</h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "var(--spacing-md)" }}>Registriere dich für den Zugang zum Mitglieder-Portal.</p>
        
        {error && <div style={{ background: "rgba(255, 50, 50, 0.1)", color: "var(--danger)", padding: "0.75rem", borderRadius: "var(--radius-sm)", marginBottom: "var(--spacing-md)", fontSize: "var(--text-sm)", border: "1px solid rgba(255, 50, 50, 0.2)" }}>
          {error}
        </div>}

        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
          <div className="input-group">
            <label className="input-label" htmlFor="name">Vollständiger Name</label>
            <input 
              id="name" 
              type="text" 
              placeholder="Dein Name" 
              className="input-field" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
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
              minLength={6}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "var(--spacing-xs)" }} disabled={isLoading}>
            {isLoading ? <Loader2 size={20} className="animate-spin" style={{ animation: "spin 1s linear infinite" }} /> : "Registrieren"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "var(--spacing-md)", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
          Schon Mitglied? <Link href="/login" style={{ color: "var(--accent)", fontWeight: 500 }}>Hier anmelden</Link>
        </p>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}
