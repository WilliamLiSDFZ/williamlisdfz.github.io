import { CONTENT } from "../content.js";
import { t } from "../i18n.js";
import { Pill, SectionHeader, sectionWrap } from "./atoms.jsx";

export function Education({ lang }) {
  const items = CONTENT.education;
  return (
    <section id="education" style={sectionWrap}>
      <SectionHeader num="02" label={lang === "zh" ? "教育" : "Education"} title={lang === "zh" ? "教育经历" : "Education"} />
      <div style={{ display: "grid", gap: 14 }}>
        {items.map((e, i) => (
          <article key={i} style={{
            background: "var(--bg-elev)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius)",
            padding: "calc(22px * var(--density))",
            display: "grid",
            gridTemplateColumns: "minmax(180px, 1fr) minmax(0, 2.4fr)",
            gap: 24,
          }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.06em" }}>{t(e.period, lang)}</div>
              <h3 className="serif" style={{ margin: "6px 0 2px", fontSize: 21, fontWeight: 600, letterSpacing: "-0.01em" }}>{t(e.school, lang)}</h3>
              <div style={{ fontSize: 14, color: "var(--ink-2)" }}>{t(e.degree, lang)}</div>
              <div style={{ fontSize: 13, color: "var(--accent-ink)", marginTop: 6 }}>{t(e.meta, lang)}</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
                {lang === "zh" ? "相关课程" : "Relevant coursework"}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {e.courses.map(c => <Pill key={c}>{c}</Pill>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
