import { CONTENT } from "../content.js";
import { t } from "../i18n.js";
import { SectionHeader, sectionWrap } from "./atoms.jsx";

export function Projects({ lang }) {
  return (
    <section id="projects" style={sectionWrap}>
      <SectionHeader num="05" label={lang === "zh" ? "项目" : "Projects"} title={lang === "zh" ? "近期项目" : "Selected projects"} />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 14,
      }}>
        {CONTENT.projects.map((p, i) => (
          <a key={i} href="#" style={{
            position: "relative",
            background: p.accent ? "var(--accent-soft)" : "var(--bg-elev)",
            border: "1px solid",
            borderColor: p.accent ? "color-mix(in oklch, var(--accent) 40%, transparent)" : "var(--line)",
            borderRadius: "var(--radius)",
            padding: "calc(22px * var(--density))",
            display: "flex", flexDirection: "column", gap: 10,
            minHeight: 180,
            transition: "transform .25s ease, box-shadow .25s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px -12px color-mix(in oklab, var(--ink) 18%, transparent)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
              <h3 className="serif" style={{ margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--ink)" }}>
                {p.name}
              </h3>
              <span className="mono" style={{ fontSize: 11, color: p.accent ? "var(--accent-ink)" : "var(--muted)" }}>{p.metric}</span>
            </div>
            <div className="mono" style={{ fontSize: 11, color: p.accent ? "var(--accent-ink)" : "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {t(p.tag, lang)}
            </div>
            <p style={{ margin: "auto 0 0", color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55 }}>
              {t(p.summary, lang)}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: p.accent ? "var(--accent-ink)" : "var(--muted)", fontSize: 12 }}>
              <span className="mono">{lang === "zh" ? "查看" : "View"}</span>
              <span>→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
