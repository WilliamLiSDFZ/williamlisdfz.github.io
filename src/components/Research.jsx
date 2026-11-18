import { CONTENT } from "../content.js";
import { t } from "../i18n.js";
import { Pill, SectionHeader, sectionWrap } from "./atoms.jsx";

export function Research({ lang }) {
  return (
    <section id="research" style={sectionWrap}>
      <SectionHeader num="03" label={lang === "zh" ? "研究" : "Research"} title={lang === "zh" ? "研究经历" : "Research"} />
      <div style={{ display: "grid", gap: 14 }}>
        {CONTENT.research.map((r, i) => (
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
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.06em" }}>{r.period}</div>
              <h3 className="serif" style={{ margin: "6px 0 2px", fontSize: 19, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.25 }}>{r.title}</h3>
              <div style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 6 }}>{t(r.role, lang)}</div>
              {r.advisor && <div style={{ fontSize: 13, color: "var(--accent-ink)", marginTop: 4 }}>{t(r.advisor, lang)}</div>}
            </div>
            <div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {r.bullets[lang].map((b, j) => (
                  <li key={j} style={{ display: "grid", gridTemplateColumns: "14px 1fr", gap: 10, fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>
                    <span aria-hidden style={{ color: "var(--accent)", marginTop: 9, width: 6, height: 1.5, background: "var(--accent)" }}></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {r.stack.map(s => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
