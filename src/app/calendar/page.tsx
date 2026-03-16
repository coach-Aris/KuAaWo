"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Calendar, ChevronLeft, ChevronRight, Download, LogOut, Plus, Settings, User, X } from "lucide-react";
import MobileNav from "@/components/MobileNav";

type CalEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  endTime: string;
  location: string;
  description: string;
  color: string;
};

const INITIAL_EVENTS: CalEvent[] = [
  { id: "1", title: "Generalversammlung", date: "2026-03-15", time: "18:00", endTime: "20:00", location: "Gesamthalle", description: "Jahresrückblick und Vorstandswahlen.", color: "hsl(210, 80%, 55%)" },
  { id: "2", title: "Bandprobe – Gruppe A", date: "2026-03-19", time: "19:00", endTime: "22:00", location: "Bandraum", description: "Wöchentliche Probe.", color: "hsl(150, 60%, 45%)" },
  { id: "3", title: "DJ-Abend", date: "2026-03-22", time: "20:00", endTime: "23:00", location: "Bandraum", description: "Offener DJ-Abend für alle Mitglieder.", color: "hsl(270, 60%, 60%)" },
  { id: "4", title: "Raumreinigung", date: "2026-03-28", time: "10:00", endTime: "12:00", location: "Gesamter Verein", description: "Halbjährliche Reinigung – alle sind willkommen.", color: "hsl(35, 90%, 65%)" },
];

const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const MONTHS = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

type BookingForm = {
  title: string;
  date: string;
  time: string;
  endTime: string;
  location: string;
  description: string;
};

export default function CalendarPage() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [events, setEvents] = useState<CalEvent[]>(INITIAL_EVENTS);
  const [selectedEvent, setSelectedEvent] = useState<CalEvent | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [form, setForm] = useState<BookingForm>({ title: "", date: "", time: "18:00", endTime: "19:00", location: "Bandraum", description: "" });

  const firstDay = new Date(currentYear, currentMonth, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const eventsInMonth = events.filter(e => {
    const d = new Date(e.date);
    return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
  });

  const getEventsForDay = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.filter(e => e.date === dateStr);
  };

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const generateICS = (ev: CalEvent) => {
    const start = ev.date.replace(/-/g, '') + 'T' + ev.time.replace(/:/g, '') + '00';
    const end = ev.date.replace(/-/g, '') + 'T' + ev.endTime.replace(/:/g, '') + '00';
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//KuAaWo//Calendar//DE\nBEGIN:VEVENT\nUID:${ev.id}@kuaawo.org\nDTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').split('.')[0]}Z\nDTSTART:${start}\nDTEND:${end}\nSUMMARY:${ev.title}\nDESCRIPTION:${ev.description}\nLOCATION:${ev.location}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${ev.title.replace(/\s+/g,'_')}.ics`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.date) return;
    const newEvent: CalEvent = { ...form, id: Date.now().toString(), color: "hsl(210, 70%, 55%)" };
    setEvents(prev => [...prev, newEvent]);
    setShowBookingForm(false);
    setForm({ title: "", date: "", time: "18:00", endTime: "19:00", location: "Bandraum", description: "" });
  };

  const isToday = (day: number) => {
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
  };

  const cells: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="dashboard-layout animate-fade-in">
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ fontSize: "var(--text-xl)", fontWeight: 700, letterSpacing: "-1px", marginBottom: "var(--spacing-lg)" }}>
          Ku<span style={{ color: "var(--accent)" }}>Aa</span>Wo
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
          <Link href="/dashboard" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--text-secondary)" }}>
            <User size={18} /> Übersicht
          </Link>
          <Link href="/calendar" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--accent)", fontWeight: 500 }}>
            <Calendar size={18} /> Kalender
          </Link>
          <Link href="/settings" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)", color: "var(--text-secondary)" }}>
            <Settings size={18} /> Einstellungen
          </Link>
        </nav>
        <div style={{ marginTop: "auto" }}>
          <button style={{ background: "transparent", border: "none", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "var(--spacing-xs)", cursor: "pointer" }}>
            <LogOut size={18} /> Abmelden
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content" style={{ overflow: "auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--spacing-sm)", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button onClick={prevMonth} style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--text-primary)", borderRadius: "var(--radius-sm)", padding: "0.4rem", cursor: "pointer", display: "flex", alignItems: "center" }}>
              <ChevronLeft size={18} />
            </button>
            <h1 style={{ fontSize: "clamp(1.1rem, 4vw, var(--text-2xl))", fontWeight: 700, minWidth: "0", textAlign: "center", whiteSpace: "nowrap" }}>
              {MONTHS[currentMonth]} {currentYear}
            </h1>
            <button onClick={nextMonth} style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--text-primary)", borderRadius: "var(--radius-sm)", padding: "0.4rem", cursor: "pointer", display: "flex", alignItems: "center" }}>
              <ChevronRight size={18} />
            </button>
          </div>
          <button onClick={() => setShowBookingForm(true)} className="btn btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1rem", fontSize: "var(--text-sm)" }}>
            <Plus size={16} /> Raumanmeldung
          </button>
        </div>

        <div style={{ position: "relative", width: "100%", height: "clamp(100px, 15vw, 200px)", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "var(--spacing-sm)", boxShadow: "var(--shadow-sm)", border: "1px solid var(--glass-border)" }} className="animate-fade-in delay-200">
          <Image src="/hero-image.png" alt="Kulturverein Aare Worblaufen" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        {/* Calendar Grid */}
        <div style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
          {/* Weekday headers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", borderBottom: "1px solid var(--glass-border)" }}>
            {WEEKDAYS.map(d => (
              <div key={d} style={{ padding: "0.4rem", textAlign: "center", fontSize: "var(--text-xs)", color: "var(--text-secondary)", fontWeight: 600, borderRight: "1px solid var(--glass-border)" }}>
                {d}
              </div>
            ))}
          </div>
          {/* Day cells */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
            {cells.map((day, i) => {
              const dayEvents = day ? getEventsForDay(day) : [];
              const todayCell = day ? isToday(day) : false;
              return (
                <div
                  key={i}
                  onClick={() => {
                    if (dayEvents.length > 0) setSelectedEvent(dayEvents[0]);
                  }}
                  style={{
                    minHeight: "clamp(48px, 10vw, 100px)",
                    padding: "0.25rem",
                    borderRight: "1px solid var(--glass-border)",
                    borderBottom: "1px solid var(--glass-border)",
                    background: todayCell ? "hsla(210, 80%, 55%, 0.08)" : "transparent",
                    position: "relative",
                    cursor: dayEvents.length > 0 ? "pointer" : "default",
                  }}
                >
                  {day && (
                    <>
                      <div style={{
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                        width: "24px", height: "24px",
                        borderRadius: "50%",
                        background: todayCell ? "var(--accent)" : "transparent",
                        color: todayCell ? "#fff" : "var(--text-secondary)",
                        fontSize: "var(--text-xs)", fontWeight: todayCell ? 700 : 400,
                        marginBottom: "2px"
                      }}>
                        {day}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                        {dayEvents.map(ev => (
                          <button
                            key={ev.id}
                            onClick={(e) => { e.stopPropagation(); setSelectedEvent(ev); }}
                            style={{
                              background: ev.color,
                              border: "none",
                              borderRadius: "3px",
                              padding: "1px 3px",
                              fontSize: "0.6rem",
                              color: "#fff",
                              fontWeight: 600,
                              cursor: "pointer",
                              textAlign: "left",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              width: "100%",
                              opacity: 0.9
                            }}
                          >
                            <span className="cal-event-text">{ev.time} {ev.title}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming list */}
        {eventsInMonth.length > 0 && (
          <div style={{ marginTop: "var(--spacing-sm)" }}>
            <h2 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--spacing-xs)", color: "var(--text-secondary)" }}>
              Events im {MONTHS[currentMonth]}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-xs)" }}>
              {eventsInMonth.sort((a,b) => a.date.localeCompare(b.date)).map(ev => (
                <div key={ev.id} onClick={() => setSelectedEvent(ev)} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", background: "var(--glass-bg)", border: "1px solid var(--glass-border)", borderRadius: "var(--radius-sm)", cursor: "pointer", borderLeft: `4px solid ${ev.color}` }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 600, fontSize: "var(--text-sm)" }}>{ev.title}</p>
                    <p style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {new Date(ev.date).toLocaleDateString("de-CH")} · {ev.time}–{ev.endTime} · {ev.location}
                    </p>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); generateICS(ev); }} className="btn btn-secondary" style={{ padding: "0.3rem 0.6rem", fontSize: "0.7rem", display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
                    <Download size={12} /> .ics
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <MobileNav />

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div onClick={() => setSelectedEvent(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "var(--spacing-sm)" }}>
          <div onClick={e => e.stopPropagation()} className="glass-panel" style={{ maxWidth: "460px", width: "100%", position: "relative" }}>
            <button onClick={() => setSelectedEvent(null)} style={{ position: "absolute", top: "1rem", right: "1rem", background: "transparent", border: "none", cursor: "pointer", color: "var(--text-secondary)" }}>
              <X size={20} />
            </button>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: selectedEvent.color, marginBottom: "var(--spacing-sm)", display: "inline-block" }} />
            <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "0.5rem" }}>{selectedEvent.title}</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", marginBottom: "var(--spacing-sm)" }}>
              {new Date(selectedEvent.date).toLocaleDateString("de-CH", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
              <br/>⏰ {selectedEvent.time}–{selectedEvent.endTime} Uhr
              <br/>{selectedEvent.location}
            </p>
            <p style={{ color: "var(--text-secondary)", marginBottom: "var(--spacing-sm)" }}>{selectedEvent.description}</p>
            <button onClick={() => generateICS(selectedEvent)} className="btn btn-primary" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}>
              <Download size={16} /> In Kalender speichern (.ics)
            </button>
            <p style={{ textAlign: "center", fontSize: "var(--text-xs)", color: "var(--text-secondary)", marginTop: "0.5rem" }}>Kompatibel mit Google, Apple & Outlook Kalender</p>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div onClick={() => setShowBookingForm(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "var(--spacing-sm)" }}>
          <div onClick={e => e.stopPropagation()} className="glass-panel" style={{ maxWidth: "500px", width: "100%", position: "relative", maxHeight: "90vh", overflowY: "auto" }}>
            <button onClick={() => setShowBookingForm(false)} style={{ position: "absolute", top: "1rem", right: "1rem", background: "transparent", border: "none", cursor: "pointer", color: "var(--text-secondary)" }}>
              <X size={20} />
            </button>
            <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "0.25rem" }}>Raumanmeldung</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", marginBottom: "var(--spacing-sm)" }}>Trag deine Veranstaltung in den Vereinskalender ein.</p>
            <form onSubmit={handleBook} style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
              <div className="input-group">
                <label className="input-label">Titel der Veranstaltung *</label>
                <input className="input-field" type="text" placeholder="z.B. Bandprobe – Gruppe B" required value={form.title} onChange={e => setForm(f => ({...f, title: e.target.value}))} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
                <div className="input-group">
                  <label className="input-label">Datum *</label>
                  <input className="input-field" type="date" required value={form.date} onChange={e => setForm(f => ({...f, date: e.target.value}))} />
                </div>
                <div className="input-group">
                  <label className="input-label">Von</label>
                  <input className="input-field" type="time" value={form.time} onChange={e => setForm(f => ({...f, time: e.target.value}))} />
                </div>
                <div className="input-group">
                  <label className="input-label">Bis</label>
                  <input className="input-field" type="time" value={form.endTime} onChange={e => setForm(f => ({...f, endTime: e.target.value}))} />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Raum</label>
                <select className="input-field" value={form.location} onChange={e => setForm(f => ({...f, location: e.target.value}))}>
                  <option>Bandraum</option>
                  <option>Gesamthalle</option>
                  <option>Aufnahmeraum</option>
                  <option>Gesamter Verein</option>
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">Beschreibung</label>
                <textarea className="input-field" rows={3} placeholder="Was findet statt?" value={form.description} onChange={e => setForm(f => ({...f, description: e.target.value}))} style={{ resize: "vertical" }} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                <Plus size={16} /> Eintragen
              </button>
            </form>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 480px) {
          .cal-event-text { font-size: 0 !important; }
          .cal-event-text::before { content: "•"; font-size: 0.6rem; }
        }
      `}} />
    </div>
  );
}
