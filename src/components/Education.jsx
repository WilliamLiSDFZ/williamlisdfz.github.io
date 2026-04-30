import { t } from "../i18n.js";
import { Pill, SectionHeader, sectionWrap } from "./atoms.jsx";

export function Education({ lang }) {
  const items = [
    {
      school: { en: "University of California, San Diego", zh: "加州大学圣地亚哥分校" },
      degree: { en: "B.S. in Mathematics – Computer Science", zh: "数学-计算机科学学士" },
      period: { en: "Expected 06/2027", zh: "预计 2027/06 毕业" },
      meta: { en: "UC GPA 3.885 / 4.0 · Provost Honors", zh: "UC GPA 3.885 / 4.0 · Provost Honors" },
      courses: [
        "Theory of Computation", "Algorithm Design & Analysis",
        "System Programming & Software Tools", "Computer Organization",
        "ML: Learning Algorithms", "Computer Vision", "Data Structures",
      ],
    },
    {
      school: { en: "University of California, Davis", zh: "加州大学戴维斯分校" },
      degree: { en: "Major: Data Science (transferred)", zh: "数据科学主修（已转学）" },
      period: { en: "08/2023 — 09/2025", zh: "2023/08 — 2025/09" },
      meta: { en: "Dean's Honor List · 4.0 term GPA", zh: "Dean’s Honor List · 4.0 学期 GPA" },
      courses: [
        "Linear Algebra", "Vector Analysis", "Numerical Analysis",
        "Discrete Math & Graph Theory", "Probability Theory",
        "Regression Analysis", "Statistical Data Science",
      ],
    },
  ];
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
