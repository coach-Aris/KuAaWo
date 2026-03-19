import Link from "next/link";
import { ChevronRight, Music, Disc3, Mic2, MapPin, Users, Heart, Calendar, ArrowRight } from "lucide-react";
import LogoFull from "@/components/LogoFull";
import LogoFullAnimated from "@/components/LogoFullAnimated";
import LogoIcon from "@/components/LogoIcon";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      {/* Navigation */}
      <div className="container" style={{ position: "relative", zIndex: 20 }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--spacing-sm) 0" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <LogoFull width={160} />
          </Link>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Link href="#ueber-uns" style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", padding: "0.6rem 0.75rem", display: "none" }} className="nav-link-desktop">Über uns</Link>
            <Link href="#angebot" style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", padding: "0.6rem 0.75rem", display: "none" }} className="nav-link-desktop">Angebot</Link>
            <Link href="/login" className="btn btn-secondary" style={{ background: "rgba(0,0,0,0.4)", padding: "0.6rem 1rem", fontSize: "var(--text-sm)" }}>Anmelden</Link>
            <Link href="/register" className="btn btn-primary" style={{ padding: "0.6rem 1rem", fontSize: "var(--text-sm)" }}>Mitglied werden</Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section style={{ position: "relative", minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: "calc(-1 * (var(--spacing-sm) + 2rem))" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/hero-image.png" alt="Kulturverein Aare Worblaufen" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0, 0, 0, 0.85)" }}></div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 0%, var(--bg) 100%)" }}></div>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 var(--spacing-sm)" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "800px", width: "100%" }}>
            <LogoFullAnimated width={480} />
            <p className="hero-subtitle" style={{ color: "var(--text-secondary)", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", marginBottom: "var(--spacing-sm)", lineHeight: 1.7, maxWidth: "600px", opacity: 0 }}>
              Wir sind ein gemeinnütziger Kulturverein in Worblaufen an der Aare. Seit 2015 fördern wir lokale Kultur mit Bandraum, Events und Gemeinschaft.
            </p>
            <div className="hero-location" style={{ display: "flex", gap: "var(--spacing-xs)", alignItems: "center", color: "var(--text-secondary)", fontSize: "var(--text-sm)", marginBottom: "var(--spacing-lg)", opacity: 0 }}>
              <MapPin size={14} />
              <span>Ittigen / Worblaufen, Kanton Bern</span>
            </div>
            <div className="hero-cta" style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", opacity: 0 }}>
              <Link href="#ueber-uns" className="btn btn-primary btn-lg">
                Mehr erfahren <ChevronRight size={18} />
              </Link>
              <Link href="#angebot" className="btn btn-secondary" style={{ background: "rgba(255,255,255,0.05)" }}>
                Unser Angebot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Über uns Section */}
      <div className="container">
        <section id="ueber-uns" style={{ paddingTop: "var(--spacing-xl)", paddingBottom: "var(--spacing-lg)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "var(--spacing-lg)", alignItems: "center" }}>
            <div>
              <p style={{ color: "var(--accent)", fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "var(--spacing-xs)" }}>Über uns</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 5vw, var(--text-3xl))", color: "var(--text-primary)", letterSpacing: "-1px", marginBottom: "var(--spacing-sm)", lineHeight: 1.2 }}>
                Kultur fördern,<br />Gemeinschaft leben
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "var(--spacing-sm)", fontSize: "var(--text-base)" }}>
                Der Kulturverein Aare Worblaufen (KuAaWo) wurde 2015 gegründet und hat seinen Sitz in Ittigen. Als politisch und konfessionell unabhängiger Verein setzen wir uns ehrenamtlich für die Förderung der lokalen Kultur ein.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "var(--text-base)" }}>
                Wir verfolgen keine kommerziellen Zwecke – alle Organe arbeiten ehrenamtlich. Unser Verein lebt von der Leidenschaft seiner Mitglieder für Musik, Kunst und Gemeinschaft direkt an der Aare.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-sm)" }}>
              <div className="glass-panel" style={{ textAlign: "center", padding: "var(--spacing-md)" }}>
                <p style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--accent)", marginBottom: "0.25rem" }}>2015</p>
                <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Gegründet</p>
              </div>
              <div className="glass-panel" style={{ textAlign: "center", padding: "var(--spacing-md)" }}>
                <p style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--accent)", marginBottom: "0.25rem" }}>100%</p>
                <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Ehrenamtlich</p>
              </div>
              <div className="glass-panel" style={{ textAlign: "center", padding: "var(--spacing-md)" }}>
                <p style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--accent)", marginBottom: "0.25rem" }}>Ittigen</p>
                <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Sitz des Vereins</p>
              </div>
              <div className="glass-panel" style={{ textAlign: "center", padding: "var(--spacing-md)" }}>
                <p style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--accent)", marginBottom: "0.25rem" }}>CHF 30</p>
                <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Jahresbeitrag ab</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Angebot Section */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid var(--glass-border)", borderBottom: "1px solid var(--glass-border)" }}>
        <div className="container">
          <section id="angebot" style={{ paddingTop: "var(--spacing-xl)", paddingBottom: "var(--spacing-lg)" }}>
            <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
              <p style={{ color: "var(--accent)", fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "var(--spacing-xs)" }}>Was wir bieten</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 5vw, var(--text-3xl))", color: "var(--text-primary)", letterSpacing: "-1px" }}>Raum für Kreativität</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: "var(--spacing-sm)" }}>
              <div className="glass-panel">
                <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "hsla(210, 80%, 55%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--spacing-sm)", color: "var(--accent)" }}>
                  <Music size={24} />
                </div>
                <h3 style={{ fontSize: "var(--text-lg)", color: "var(--text-primary)", marginBottom: "var(--spacing-xs)" }}>Bandraum</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "var(--text-sm)" }}>
                  Voll ausgestatteter Proberaum mit professionellem Equipment. Verstärker, Drums, Mikrofone – alles was es braucht.
                </p>
              </div>
              <div className="glass-panel">
                <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "hsla(210, 80%, 55%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--spacing-sm)", color: "var(--accent)" }}>
                  <Calendar size={24} />
                </div>
                <h3 style={{ fontSize: "var(--text-lg)", color: "var(--text-primary)", marginBottom: "var(--spacing-xs)" }}>Events & Veranstaltungen</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "var(--text-sm)" }}>
                  Konzerte, DJ-Nights und kulturelle Anlässe. Wir bringen Kultur direkt an die Aare in Worblaufen.
                </p>
              </div>
              <div className="glass-panel">
                <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "hsla(210, 80%, 55%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--spacing-sm)", color: "var(--accent)" }}>
                  <Users size={24} />
                </div>
                <h3 style={{ fontSize: "var(--text-lg)", color: "var(--text-primary)", marginBottom: "var(--spacing-xs)" }}>Gemeinschaft</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "var(--text-sm)" }}>
                  Generalversammlungen, gemeinsame Projekte und ein Netzwerk von Kulturschaffenden in der Region Bern.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Equipment Section */}
      <div className="container">
        <section id="equipment" style={{ paddingTop: "var(--spacing-xl)", paddingBottom: "var(--spacing-lg)" }}>
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <p style={{ color: "var(--accent)", fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "var(--spacing-xs)" }}>Im Bandraum</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 5vw, var(--text-3xl))", color: "var(--text-primary)", letterSpacing: "-1px" }}>Unser Equipment</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "var(--spacing-sm)" }}>
            <div className="glass-panel">
              <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "hsla(210, 80%, 55%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--spacing-sm)", color: "var(--accent)" }}>
                <Disc3 size={24} />
              </div>
              <h3 style={{ fontSize: "var(--text-xl)", color: "var(--text-primary)" }}>Pioneer Logik</h3>
              <p style={{ color: "var(--text-secondary)", marginTop: "var(--spacing-xs)" }}>CDJs und analog-digitale Hybridpulte für den modernen Selector.</p>
            </div>
            <div className="glass-panel">
              <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "hsla(210, 80%, 55%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--spacing-sm)", color: "var(--accent)" }}>
                <Music size={24} />
              </div>
              <h3 style={{ fontSize: "var(--text-xl)", color: "var(--text-primary)" }}>Pure Energie</h3>
              <p style={{ color: "var(--text-secondary)", marginTop: "var(--spacing-xs)" }}>Verstärkte Gitarren und kraftvolle Drums. Keine Nachbarn, nur Sound.</p>
            </div>
            <div className="glass-panel">
              <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "hsla(210, 80%, 55%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--spacing-sm)", color: "var(--accent)" }}>
                <Mic2 size={24} />
              </div>
              <h3 style={{ fontSize: "var(--text-xl)", color: "var(--text-primary)" }}>Studio Mikrofone</h3>
              <p style={{ color: "var(--text-secondary)", marginTop: "var(--spacing-xs)" }}>Die Essenz einfangen – in einem Raum ohne Reflexionen und mit vollem Fokus.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Mitgliedschaft Section */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid var(--glass-border)", borderBottom: "1px solid var(--glass-border)" }}>
        <div className="container">
          <section id="mitgliedschaft" style={{ paddingTop: "var(--spacing-xl)", paddingBottom: "var(--spacing-lg)" }}>
            <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
              <p style={{ color: "var(--accent)", fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "var(--spacing-xs)" }}>Mitmachen</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 5vw, var(--text-3xl))", color: "var(--text-primary)", letterSpacing: "-1px", marginBottom: "var(--spacing-xs)" }}>Werde Teil vom KuAaWo</h2>
              <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
                Mitglied kann jede natürliche und juristische Person werden, die unseren Vereinszweck unterstützt.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "var(--spacing-sm)", maxWidth: "900px", margin: "0 auto" }}>
              {/* Aktivmitglied */}
              <div className="glass-panel" style={{ position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--accent)" }}></div>
                <p style={{ color: "var(--accent)", fontSize: "var(--text-sm)", fontWeight: 600, marginBottom: "var(--spacing-xs)" }}>Aktivmitglied</p>
                <p style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "var(--spacing-xs)" }}>
                  CHF 30 <span style={{ fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--text-secondary)" }}>/ Jahr</span>
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "var(--spacing-sm) 0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "hsl(145, 70%, 55%)" }}>✓</span> Stimmrecht an der GV
                  </li>
                  <li style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "hsl(145, 70%, 55%)" }}>✓</span> Nutzung Bandraum & Angebote
                  </li>
                  <li style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "hsl(145, 70%, 55%)" }}>✓</span> Zugang zu allen Events
                  </li>
                </ul>
                <Link href="/register" className="btn btn-primary" style={{ width: "100%", textAlign: "center", marginTop: "var(--spacing-xs)" }}>
                  Jetzt bewerben <ArrowRight size={16} />
                </Link>
              </div>

              {/* Passivmitglied */}
              <div className="glass-panel">
                <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", fontWeight: 600, marginBottom: "var(--spacing-xs)" }}>Passivmitglied</p>
                <p style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "var(--spacing-xs)" }}>
                  CHF 48 <span style={{ fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--text-secondary)" }}>/ Jahr</span>
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "var(--spacing-sm) 0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "hsl(145, 70%, 55%)" }}>✓</span> Ideelle & finanzielle Unterstützung
                  </li>
                  <li style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "hsl(145, 70%, 55%)" }}>✓</span> Zugang zu Events
                  </li>
                  <li style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "var(--text-secondary)", opacity: 0.4 }}>–</span> Kein Stimmrecht
                  </li>
                </ul>
                <Link href="/register" className="btn btn-secondary" style={{ width: "100%", textAlign: "center", marginTop: "var(--spacing-xs)" }}>
                  Kontakt aufnehmen
                </Link>
              </div>

              {/* Gönner */}
              <div className="glass-panel">
                <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", fontWeight: 600, marginBottom: "var(--spacing-xs)" }}>Gönner</p>
                <p style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "var(--spacing-xs)" }}>
                  Frei <span style={{ fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--text-secondary)" }}>ab CHF 48</span>
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "var(--spacing-sm) 0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "hsl(145, 70%, 55%)" }}>✓</span> Kultur in der Region unterstützen
                  </li>
                  <li style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "hsl(145, 70%, 55%)" }}>✓</span> Spenden & Zuwendungen
                  </li>
                  <li style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Heart size={14} style={{ color: "hsl(350, 60%, 55%)" }} /> Gemeinnützig
                  </li>
                </ul>
                <Link href="/register" className="btn btn-secondary" style={{ width: "100%", textAlign: "center", marginTop: "var(--spacing-xs)" }}>
                  Gönner werden
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--glass-border)" }}>
        <div className="container" style={{ padding: "var(--spacing-lg) var(--spacing-sm)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "var(--spacing-lg)" }}>
            <div>
              <div style={{ marginBottom: "var(--spacing-sm)" }}>
                <LogoIcon size={40} />
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", lineHeight: 1.6 }}>
                Kulturverein Aare Worblaufen<br />
                Verein im Sinne von Art. 60 ff. ZGB<br />
                Politisch und konfessionell unabhängig
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--text-primary)", fontSize: "var(--text-sm)", fontWeight: 600, marginBottom: "var(--spacing-sm)", textTransform: "uppercase", letterSpacing: "1px" }}>Verein</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Link href="#ueber-uns" style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Über uns</Link>
                <Link href="#angebot" style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Angebot</Link>
                <Link href="#equipment" style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Equipment</Link>
                <Link href="#mitgliedschaft" style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Mitgliedschaft</Link>
              </div>
            </div>
            <div>
              <h4 style={{ color: "var(--text-primary)", fontSize: "var(--text-sm)", fontWeight: 600, marginBottom: "var(--spacing-sm)", textTransform: "uppercase", letterSpacing: "1px" }}>Standort</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", lineHeight: 1.8 }}>
                Worblaufen, Ittigen<br />
                Kanton Bern, Schweiz
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--text-primary)", fontSize: "var(--text-sm)", fontWeight: 600, marginBottom: "var(--spacing-sm)", textTransform: "uppercase", letterSpacing: "1px" }}>Mitglieder</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Link href="/login" style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Anmelden</Link>
                <Link href="/register" style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)" }}>Mitglied werden</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--glass-border)", marginTop: "var(--spacing-lg)", paddingTop: "var(--spacing-md)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "var(--spacing-sm)" }}>
            <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-xs)", opacity: 0.5 }}>
              © {new Date().getFullYear()} Kulturverein Aare Worblaufen. Gegründet 2015.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-xs)", opacity: 0.5 }}>
              Gemeinnütziger Verein · Ehrenamtlich · Nicht-kommerziell
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
