import Link from "next/link";
import { ChevronRight, Music, Disc3, Mic2, Navigation, Layers } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      {/* Navigation - inside container */}
      <div className="container" style={{ position: "relative", zIndex: 20 }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--spacing-md) 0" }}>
          <div style={{ fontSize: "var(--text-xl)", fontWeight: 700, letterSpacing: "-1px" }}>
            Ku<span style={{ color: "var(--accent)" }}>Aa</span>Wo
          </div>
          <div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
            <Link href="/login" className="btn btn-secondary" style={{ background: "rgba(0,0,0,0.4)" }}>Anmelden</Link>
            <Link href="/register" className="btn btn-primary">Mitglied werden</Link>
          </div>
        </nav>
      </div>

      {/* Hero Section - True Full Width, No Frame */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: "calc(-1 * (var(--spacing-md) + 2rem))" }}>
        
        {/* Background Image - Edge to Edge */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
           <Image 
             src="/hero-image.png"
             alt="Kulturverein Aare Worblaufen"
             fill
             style={{ objectFit: "cover", objectPosition: "center" }}
             priority
           />
           {/* Dark Layer / Overlay */}
           <div style={{ position: "absolute", inset: 0, background: "rgba(0, 0, 0, 0.88)" }}></div>
           <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 0%, var(--bg) 100%)" }}></div>
        </div>

        {/* Hero Content - Centered */}
        <div className="container" style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div className="animate-fade-in" style={{ opacity: 0, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "800px" }}>
            <h1 className="title-gradient" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", marginBottom: "var(--spacing-sm)", letterSpacing: "-3px", lineHeight: 1.05, textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}>
              Ku<span style={{ color: "var(--accent)" }}>Aa</span>Wo
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-xl)", marginBottom: "var(--spacing-xs)", lineHeight: 1.4 }}>
              Kulturverein Aare Worblaufen
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-base)", marginBottom: "var(--spacing-lg)", lineHeight: 1.6, maxWidth: "600px", opacity: 0.7 }}>
              Bandraum &middot; Events &middot; Kultur direkt an der Aare
            </p>
            <div style={{ display: "flex", gap: "var(--spacing-sm)", justifyContent: "center" }}>
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
      
      {/* Features Section - inside container */}
      <div className="container">
        <section id="features" style={{ paddingTop: "var(--spacing-xl)", paddingBottom: "var(--spacing-lg)" }}>
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2 style={{ fontSize: "var(--text-3xl)", color: "var(--text-primary)", letterSpacing: "-1px" }}>Unser Equipment</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--spacing-md)" }}>
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

      {/* Responsive adjustments */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .title-gradient {
            font-size: 3rem !important;
          }
        }
      `}} />
    </main>
  );
}
