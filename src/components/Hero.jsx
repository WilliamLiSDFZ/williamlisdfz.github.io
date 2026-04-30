import { useState, useEffect } from "react";
import { CONTENT } from "../content.js";
import { t } from "../i18n.js";
import { Pill } from "./atoms.jsx";

export function Hero({ lang }) {
  const [latency, setLatency] = useState(62);
  useEffect(() => {
    const id = setInterval(() => {
      setLatency(l => Math.max(48, Math.min(84, l + (Math.random() * 8 - 4))));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" style={{
      maxWidth: "var(--maxw)", margin: "0 auto",
      padding: "calc(64px * var(--density)) var(--pad) calc(48px * var(--density))",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 32, alignItems: "end" }}>
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
            <Pill tone="good">
              <span style={{ width: 7, height: 7, borderRadius: 99, background: "var(--good)", display: "inline-block" }} />
              {t(CONTENT.availability, lang)}
            </Pill>
            <Pill>{t(CONTENT.location, lang)}</Pill>
          </div>
          <h1 className="serif" style={{
            margin: 0,
            fontSize: "clamp(44px, 7vw, 84px)",
            fontWeight: 500, lineHeight: 0.98, letterSpacing: "-0.035em",
            color: "var(--ink)",
          }}>
            {CONTENT.name}
            <span style={{ color: "var(--muted-2)", fontWeight: 400 }}>.</span>
          </h1>
          <div style={{ marginTop: 8, fontSize: 18, color: "var(--ink-2)", display: "flex", gap: 14, flexWrap: "wrap", alignItems: "baseline" }}>
            <span className="mono" style={{ color: "var(--accent-ink)", fontSize: 15 }}>// {t(CONTENT.role, lang)}</span>
            <span style={{ color: "var(--muted-2)" }}>·</span>
            <span style={{ fontFamily: lang === "zh" ? '"Noto Serif SC", serif' : "inherit" }}>
              {lang === "zh" ? CONTENT.nameZh : "UC San Diego · Math-CS"}
            </span>
          </div>
          <p style={{
            marginTop: 28, maxWidth: 620,
            fontSize: "clamp(17px, 1.6vw, 20px)", lineHeight: 1.55,
            color: "var(--ink-2)",
          }}>
            {t(CONTENT.tagline, lang)}
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#contact" style={{
              padding: "10px 16px", background: "var(--ink)", color: "var(--bg)",
              borderRadius: 10, fontSize: 14, fontWeight: 500,
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              {lang === "zh" ? "联系我" : "Get in touch"}
              <span style={{ opacity: 0.6 }}>→</span>
            </a>
            <a href="#work" style={{
              padding: "10px 16px", background: "var(--bg-elev)", color: "var(--ink)",
              border: "1px solid var(--line-strong)", borderRadius: 10, fontSize: 14, fontWeight: 500,
            }}>
              {lang === "zh" ? "看看经历" : "See experience"}
            </a>
            <a href="#" style={{
              padding: "10px 16px", background: "transparent", color: "var(--ink-2)",
              border: "1px solid var(--line)", borderRadius: 10, fontSize: 14, fontWeight: 500,
            }}>
              {lang === "zh" ? "下载简历 PDF" : "Download CV (PDF)"}
            </a>
          </div>
        </div>

        {/* Avatar + live widget */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-end" }}>
          <div style={{
            width: 168, height: 168, borderRadius: 20,
            background: "repeating-linear-gradient(135deg, var(--bg-sunk) 0 8px, var(--bg-elev) 8px 16px)",
            border: "1px solid var(--line)",
            display: "grid", placeItems: "center",
            color: "var(--muted-2)", fontSize: 11,
            fontFamily: '"JetBrains Mono", monospace', letterSpacing: "0.04em",
          }}>
            photo · 512×512
          </div>
          <div style={{
            width: 168,
            background: "var(--bg-elev)", border: "1px solid var(--line)",
            borderRadius: 12, padding: 12,
            fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", color: "var(--muted)", marginBottom: 6 }}>
              <span>uptime</span><span style={{ color: "var(--good)" }}>99.982%</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "var(--muted)", marginBottom: 6 }}>
              <span>p99</span><span style={{ color: "var(--ink)" }}>{latency.toFixed(0)}ms</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "var(--muted)" }}>
              <span>region</span><span style={{ color: "var(--ink)" }}>us-sd-1</span>
            </div>
            <div style={{ display: "flex", gap: 2, marginTop: 10 }}>
              {Array.from({ length: 24 }).map((_, i) => {
                const h = 6 + ((Math.sin(i * 1.3 + latency * 0.02) + 1) * 7);
                return <div key={i} style={{
                  flex: 1, height: h,
                  background: i === 23 ? "var(--accent)" : "color-mix(in oklch, var(--ink) 15%, transparent)",
                  borderRadius: 1,
                }} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
