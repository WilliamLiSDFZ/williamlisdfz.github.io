import { CONTENT } from "../content.js";
import { t } from "../i18n.js";
import { SectionHeader, sectionWrap } from "./atoms.jsx";

export function OSS({ lang }) {
  return (
    <section id="oss" style={sectionWrap}>
      <SectionHeader num="06" label={lang === "zh" ? "开源" : "Open source"} title={lang === "zh" ? "个人仓库" : "Repositories"} />
      <div style={{
        background: "var(--bg-elev)", border: "1px solid var(--line)", borderRadius: "var(--radius)",
        overflow: "hidden",
      }}>
        {CONTENT.oss.map((o, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            alignItems: "center",
            gap: 20,
            padding: "16px 22px",
            borderBottom: i === CONTENT.oss.length - 1 ? "none" : "1px solid var(--line)",
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <span className="mono" style={{ fontSize: 11, color: "var(--muted-2)", width: 24 }}>0{i + 1}</span>
              <span className="serif" style={{ fontSize: 19, fontWeight: 600 }}>{o.name}</span>
            </div>
            <span style={{ fontSize: 13, color: "var(--ink-2)" }}>{t(o.role, lang)}</span>
            <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>{o.count}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
