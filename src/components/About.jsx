import { CONTENT } from "../content.js";
import { AsideKV, SectionHeader, sectionWrap } from "./atoms.jsx";

export function About({ lang }) {
  return (
    <section id="about" style={sectionWrap}>
      <SectionHeader num="01" label={lang === "zh" ? "关于" : "About"} title={lang === "zh" ? "关于" : "About"}
        kicker={lang === "zh" ? "工程师 · 做事的人 · 文档爱好者" : "Engineer · shipper · documentation enthusiast"} />
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)", gap: 40 }}>
        <div style={{ fontSize: "clamp(17px, 1.45vw, 19px)", lineHeight: 1.65, color: "var(--ink-2)" }}>
          {CONTENT.about[lang].map((p, i) => (
            <p key={i} style={{ margin: i === 0 ? 0 : "18px 0 0" }}>{p}</p>
          ))}
        </div>
        <aside style={{
          background: "var(--bg-elev)", border: "1px solid var(--line)",
          borderRadius: "var(--radius)", padding: 20,
          display: "flex", flexDirection: "column", gap: 14,
          alignSelf: "start",
        }}>
          <AsideKV k={lang === "zh" ? "现居" : "Based"} v={lang === "zh" ? "加州圣地亚哥" : "San Diego, CA"} />
          <AsideKV k={lang === "zh" ? "时区" : "Timezone"} v="UTC−8 (PT)" />
          <AsideKV k={lang === "zh" ? "学校" : "School"} v={lang === "zh" ? "UCSD · 2027 毕业" : "UCSD · class of 2027"} />
          <AsideKV k={lang === "zh" ? "GPA" : "GPA"} v="3.885 / 4.0" />
          <AsideKV k={lang === "zh" ? "语言" : "Languages"} v={lang === "zh" ? "中文 · 英文" : "Chinese · English"} />
          <AsideKV k={lang === "zh" ? "寻找" : "Seeking"} v={lang === "zh" ? "2026 夏实习" : "Summer 2026 intern"} />
          <hr style={{ border: 0, borderTop: "1px dashed var(--line)", margin: "4px 0" }} />
          <div className="mono" style={{ fontSize: 11, color: "var(--muted)", lineHeight: 1.6 }}>
            $ whoami<br/>
            <span style={{ color: "var(--ink)" }}>yuze</span>@ucsd ~<br/>
            $ major<br/>
            <span style={{ color: "var(--ink)" }}>math-cs, provost honors</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
