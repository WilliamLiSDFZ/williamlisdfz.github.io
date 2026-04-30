import { CONTENT } from "../content.js";
import { t } from "../i18n.js";
import { Pill, SectionHeader, sectionWrap } from "./atoms.jsx";

export function Work({ lang }) {
  return (
    <section id="work" style={sectionWrap}>
      <SectionHeader num="04" label={lang === "zh" ? "经历" : "Work"} title={lang === "zh" ? "工作经历" : "Experience"} />
      <div style={{ display: "grid", gap: 14 }}>
        {CONTENT.work.map((job, i) => (
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
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.06em" }}>{job.period}</div>
              <h3 className="serif" style={{ margin: "6px 0 2px", fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em" }}>{job.co}</h3>
              <div style={{ fontSize: 14, color: "var(--ink-2)" }}>{t(job.role, lang)}</div>
              <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>{t(job.loc, lang)}</div>
            </div>
            <div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {job.bullets[lang].map((b, j) => (
                  <li key={j} style={{ display: "grid", gridTemplateColumns: "14px 1fr", gap: 10, fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>
                    <span aria-hidden style={{ color: "var(--accent)", marginTop: 9, width: 6, height: 1.5, background: "var(--accent)" }}></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {job.stack.map(s => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
