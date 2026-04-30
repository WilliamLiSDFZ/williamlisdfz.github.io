import { CONTENT, NAV } from "../content.js";

export function TopNav({ lang, setLang, theme, setTheme, openPalette }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 40,
      backdropFilter: "saturate(1.2) blur(12px)",
      background: "color-mix(in oklab, var(--bg) 82%, transparent)",
      borderBottom: "1px solid var(--line)",
    }}>
      <div style={{
        maxWidth: "var(--maxw)", margin: "0 auto",
        padding: "14px var(--pad)",
        display: "flex", alignItems: "center", gap: 18,
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: "var(--ink)", color: "var(--bg)",
            display: "grid", placeItems: "center",
            fontFamily: '"JetBrains Mono", monospace', fontSize: 13, fontWeight: 600,
          }}>YL</div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>
            {CONTENT.name}
            <span className="mono" style={{ color: "var(--muted)", marginLeft: 8, fontWeight: 400, fontSize: 12 }}>
              {lang === "zh" ? CONTENT.nameZh : "backend.eng"}
            </span>
          </div>
        </a>
        <nav style={{ display: "flex", gap: 4, marginLeft: "auto", flexWrap: "wrap" }}>
          {NAV.map(n => (
            <a key={n.id} href={`#${n.id}`} style={{
              padding: "6px 10px", fontSize: 13, color: "var(--ink-2)",
              borderRadius: 8,
            }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--bg-sunk)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {n[lang]}
            </a>
          ))}
        </nav>
        <button onClick={openPalette} className="mono" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 10px", fontSize: 12, color: "var(--muted)",
          background: "var(--bg-elev)", border: "1px solid var(--line)",
          borderRadius: 8, cursor: "pointer",
        }}>
          <span>⌘K</span>
        </button>
        <button onClick={() => setLang(lang === "en" ? "zh" : "en")} className="mono" style={{
          padding: "6px 10px", fontSize: 12,
          background: "var(--bg-elev)", border: "1px solid var(--line)",
          borderRadius: 8, cursor: "pointer", color: "var(--ink-2)",
          minWidth: 56,
        }}>
          {lang === "en" ? "中 / EN" : "EN / 中"}
        </button>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="theme" style={{
          padding: "6px 8px", background: "var(--bg-elev)", border: "1px solid var(--line)",
          borderRadius: 8, cursor: "pointer", color: "var(--ink-2)", display: "grid", placeItems: "center",
        }}>
          {theme === "dark"
            ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            : <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>}
        </button>
      </div>
    </header>
  );
}
