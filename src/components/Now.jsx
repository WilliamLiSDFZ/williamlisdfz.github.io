import { CONTENT } from "../content.js";
import { SectionHeader, sectionWrap } from "./atoms.jsx";

export function Now({ lang }) {
  return (
    <section id="now" style={sectionWrap}>
      <SectionHeader
        num="03"
        label="Now"
        title={lang === "zh" ? "当下在做" : "What I'm doing now"}
        kicker={lang === "zh" ? "最近更新：2026-04-23" : "Last updated: 2026-04-23"}
      />
      <div style={{
        background: "var(--bg-elev)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius)",
        padding: "calc(22px * var(--density))",
      }}>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
          {CONTENT.now[lang].map((item, i) => (
            <li key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr", alignItems: "baseline", gap: 6 }}>
              <span className="mono" style={{ color: "var(--muted-2)", fontSize: 12 }}>0{i + 1}</span>
              <span style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.55 }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
