import { CONTENT } from "../content.js";
import { t } from "../i18n.js";
import { Pill, SectionHeader, sectionWrap } from "./atoms.jsx";

export function Skills({ lang }) {
  return (
    <section id="skills" style={sectionWrap}>
      <SectionHeader num="07" label={lang === "zh" ? "技能" : "Skills"} title={lang === "zh" ? "技术栈" : "Stack"} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
        {CONTENT.skills.map((s, i) => (
          <div key={i} style={{
            background: "var(--bg-elev)", border: "1px solid var(--line)",
            borderRadius: "var(--radius)", padding: "calc(20px * var(--density))",
          }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
              {t(s.group, lang)}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {s.items.map(x => <Pill key={x}>{x}</Pill>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
