import Link from "next/link";
import { ChevronRight, Music, Disc3, Mic2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      {/* Navigation */}
      <div className="container" style={{ position: "relative", zIndex: 20 }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--spacing-sm) 0" }}>
          <div style={{ fontSize: "var(--text-xl)", fontWeight: 700, letterSpacing: "-1px" }}>
            Ku<span style={{ color: "var(--accent)" }}>Aa</span>Wo
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Link href="/login" className="btn btn-secondary" style={{ background: "rgba(0,0,0,0.4)", padding: "0.6rem 1rem", fontSize: "var(--text-sm)" }}>Anmelden</Link>
            <Link href="/register" className="btn btn-primary" style={{ padding: "0.6rem 1rem", fontSize: "var(--text-sm)" }}>Mitglied werden</Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section style={{ position: "relative", minHeight: "85vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: "calc(-1 * (var(--spacing-sm) + 2rem))" }}>

        {/* Background Image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
           <Image
             src="/hero-image.png"
             alt="Kulturverein Aare Worblaufen"
             fill
             style={{ objectFit: "cover", objectPosition: "center" }}
             priority
           />
           <div style={{ position: "absolute", inset: 0, background: "rgba(0, 0, 0, 0.88)" }}></div>
           <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 0%, var(--bg) 100%)" }}></div>
        </div>

        {/* Hero Content */}
        <div className="container" style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 var(--spacing-sm)" }}>
          <div className="animate-fade-in" style={{ opacity: 0, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "800px", width: "100%" }}>
            <h1 className="title-gradient" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", marginBottom: "var(--spacing-sm)", letterSpacing: "-3px", lineHeight: 1.05, textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}>
              Ku<span style={{ color: "var(--accent)" }}>Aa</span>Wo
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "clamp(1rem, 3vw, var(--text-xl))", marginBottom: "var(--spacing-xs)", lineHeight: 1.4 }}>
              Kulturverein Aare Worblaufen
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-base)", marginBottom: "var(--spacing-lg)", lineHeight: 1.6, maxWidth: "600px", opacity: 0.7 }}>
              Bandraum &middot; Events &middot; Kultur direkt an der Aare
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/register" className="btn btn-primary btn-lg">
                Mitglied werden <ChevronRight size={18} />
              </Link>
              <Link href="#features" className="btn btn-secondary" style={{ background: "rgba(255,255,255,0.05)" }}>
                Equipment ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="container">
        <section id="features" style={{ paddingTop: "var(--spacing-xl)", paddingBottom: "var(--spacing-lg)" }}>
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 5vw, var(--text-3xl))", color: "var(--text-primary)", letterSpacing: "-1px" }}>Unser Equipment</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "var(--spacing-sm)" }}>
            <div className="glass-panel animate-fade-in delay-100" style={{ opacity: 0 }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "hsla(210, 80%, 55%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--spacing-sm)", color: "var(--accent)" }}>
                <Disc3 size={24} />
              </div>
              <h3 style={{ fontSize: "var(--text-xl)", color: "var(--text-primary)" }}>Pioneer Logik</h3>
              <p style={{ color: "var(--text-secondary)", marginTop: "var(--spacing-xs)" }}>CDJs und analog-digitale Hybridpulte für den modernen Selector.</p>
            </div>
            <div className="glass-panel animate-fade-in delay-200" style={{ opacity: 0 }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "hsla(210, 80%, 55%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--spacing-sm)", color: "var(--accent)" }}>
                <Music size={24} />
              </div>
              <h3 style={{ fontSize: "var(--text-xl)", color: "var(--text-primary)" }}>Pure Energie</h3>
              <p style={{ color: "var(--text-secondary)", marginTop: "var(--spacing-xs)" }}>Verstärkte Gitarren und kraftvolle Drums. Keine Nachbarn, nur Sound.</p>
            </div>
            <div className="glass-panel animate-fade-in delay-300" style={{ opacity: 0 }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "hsla(210, 80%, 55%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--spacing-sm)", color: "var(--accent)" }}>
                <Mic2 size={24} />
              </div>
              <h3 style={{ fontSize: "var(--text-xl)", color: "var(--text-primary)" }}>Studio Mikrofone</h3>
              <p style={{ color: "var(--text-secondary)", marginTop: "var(--spacing-xs)" }}>Die Essenz einfangen – in einem Raum ohne Reflexionen und mit vollem Fokus.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
