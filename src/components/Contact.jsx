import { CONTENT } from "../content.js";
import { SectionHeader, sectionWrap } from "./atoms.jsx";

export function Contact({ lang }) {
  return (
    <section id="contact" style={{ ...sectionWrap, paddingBottom: "calc(96px * var(--density))" }}>
      <SectionHeader num="08" label={lang === "zh" ? "联系" : "Contact"} title={lang === "zh" ? "保持联系" : "Say hello"} />
      <div style={{
        background: "var(--ink)",
        color: "var(--bg)",
        borderRadius: "var(--radius)",
        padding: "calc(36px * var(--density)) calc(32px * var(--density))",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
        gap: 40,
      }}>
        <div>
          <h3 className="serif" style={{ margin: 0, fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05 }}>
            {lang === "zh" ? (
              <>想聊聊后端、<br/>系统设计，或只是打个招呼？</>
            ) : (
              <>Want to talk backend,<br/> systems, or just say hi?</>
            )}
          </h3>
          <p style={{ marginTop: 16, color: "color-mix(in oklab, var(--bg) 70%, transparent)", fontSize: 15, lineHeight: 1.6, maxWidth: 420 }}>
            {lang === "zh"
              ? "我通常在 24 小时内回复邮件。欢迎问架构、面试、职业发展，或者推荐一家好的咖啡馆。"
              : "I usually reply to email within a day. Good topics: architecture, interviews, career advice, or a coffee recommendation."}
          </p>
        </div>
        <div style={{ display: "grid", gap: 8, alignContent: "start" }}>
          {CONTENT.contact.map((c, i) => (
            <a key={i} href={c.href} style={{
              display: "grid", gridTemplateColumns: "90px 1fr auto", gap: 12,
              padding: "12px 16px",
              background: "color-mix(in oklab, var(--bg) 8%, transparent)",
              borderRadius: 10,
              fontSize: 14,
              alignItems: "center",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "color-mix(in oklab, var(--bg) 16%, transparent)"}
            onMouseLeave={e => e.currentTarget.style.background = "color-mix(in oklab, var(--bg) 8%, transparent)"}
            >
              <span className="mono" style={{ fontSize: 11, color: "color-mix(in oklab, var(--bg) 55%, transparent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.label}</span>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.value}</span>
              <span style={{ opacity: 0.5 }}>→</span>
            </a>
          ))}
        </div>
      </div>
      <footer style={{
        marginTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8,
        fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: "var(--muted)",
      }}>
        <span>© 2026 {CONTENT.name} · {lang === "zh" ? "用 HTML 手写" : "Handcrafted in HTML"}</span>
        <span>{lang === "zh" ? "最后部署" : "Last deploy"} · 2026-04-23 · commit <span style={{ color: "var(--ink-2)" }}>a3f91c</span></span>
      </footer>
    </section>
  );
}
