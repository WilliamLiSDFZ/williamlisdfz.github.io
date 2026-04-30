const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ------- Tweak defaults (persisted by host) -------
const TWEAKS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": 250,
  "density": "comfortable",
  "lang": "en"
}/*EDITMODE-END*/;

// ------- Content (bilingual) -------
const CONTENT = {
  name: "Yuze Li",
  nameZh: "李宇泽",
  role: {
    en: "Backend Engineer · Co-founder",
    zh: "后端工程师 · 联合创始人",
  },
  tagline: {
    en: "CS student at UC San Diego building microservices, distributed systems, and an AI marketing platform — I like backends that stay calm under load.",
    zh: "加州大学圣地亚哥分校 CS 在读；做微服务、分布式系统，还有一个 AI 营销平台——喜欢在高压下依然稳定的后端。",
  },
  location: { en: "San Diego, CA · Remote-friendly", zh: "加州圣地亚哥 · 远程友好" },
  availability: {
    en: "Open to SWE / Backend internships · Summer 2026",
    zh: "正在寻找后端 / 软件工程实习 · 2026 夏",
  },
  about: {
    en: [
      "I'm Yuze — a Math-CS undergrad at UC San Diego (expected 2027), co-founder & VP of Engineering at Unifinity AI, where we're building an AI marketing platform for small businesses. I spend most days in Java + Spring Boot, designing microservices and real-time pipelines.",
      "I care about clean service boundaries, rate-limiters that actually protect you, and debugging tools that make on-call less scary. Outside of startup work I build things in C to stay close to the metal — custom allocators, Unix shells, that kind of thing.",
    ],
    zh: [
      "我是李宇泽——UCSD 数学与计算机本科在读（预计 2027 毕业），同时是 Unifinity AI 的联合创始人兼工程 VP，我们在做一个面向中小企业的 AI 营销平台。日常主要写 Java + Spring Boot，设计微服务和实时数据管道。",
      "关心干净的服务边界、真正能扛住流量的限流器，以及让值班不那么可怕的调试工具。业余会用 C 写点贴近系统底层的东西——自定义内存分配器、Unix shell 之类的。",
    ],
  },
  now: {
    en: [
      "Building Unifinity AI's online transactional pipeline — 23-table schema feeding LLM strategy generation",
      "Wrapping up UCSD coursework in Theory of Computation & Computer Vision",
      "Shipping What4Dinner — a Gemini-powered meal planner with shared family workspaces",
      "Open to Summer 2026 SWE / Backend internships",
    ],
    zh: [
      "在做 Unifinity AI 的在线交易管道——23 张表的数据送入 LLM 生成营销策略",
      "在修 UCSD 的计算理论和计算机视觉课",
      "在做 What4Dinner——基于 Gemini 的家庭共享菜单规划",
      "寻找 2026 夏季软件工程 / 后端实习",
    ],
  },
  work: [
    {
      co: "Unifinity AI",
      role: { en: "Co-founder & VP of Engineering", zh: "联合创始人 & 工程 VP" },
      period: "2025/07 — Now",
      loc: { en: "Remote", zh: "远程" },
      bullets: {
        en: [
          "Architected a microservices-based backend in Java + Spring Boot, deployed on CentOS with Docker, behind Cloudflare CDN + Nginx reverse proxy",
          "Designed and implemented the online transactional pipeline — 23 tables capturing real-time user inputs, fed to LLMs for AI-driven marketing strategy generation",
          "Built a per-user token-bucket limiter with round-robin scheduling for equitable QPS across concurrent AI image-generation users",
          "Streamed strategies and published to Instagram / Facebook via Server-Sent Events pipelines integrating the Meta Graph API",
          "Secure file manager with role-based access control, Google OAuth 2.0, and reCAPTCHA",
          "Scope new features: feasibility → dev plan → cross-team coordination → launch",
        ],
        zh: [
          "用 Java + Spring Boot 设计微服务后端，部署在 CentOS + Docker，Cloudflare CDN + Nginx 反向代理",
          "设计并实现在线交易管道——23 张表采集实时用户输入，送入 LLM 生成 AI 营销策略",
          "构建每用户令牌桶限流器 + 轮询调度，保证并发 AI 图像生成下的 QPS 公平分配",
          "通过 SSE 管道 + Meta Graph API，把策略和内容发布到 Instagram、Facebook 等平台",
          "带 RBAC 的安全文件管理模块，集成 Google OAuth 2.0 和 reCAPTCHA",
          "负责新功能规划：可行性评估 → 开发计划 → 跨团队协同 → 上线",
        ],
      },
      stack: ["Java", "Spring Boot", "MySQL", "Redis", "Docker", "Nginx", "Cloudflare"],
    },
    {
      co: "Compass Lessons",
      role: { en: "Software Development Intern (Remote)", zh: "软件开发实习生（远程）" },
      period: "2025/07 — 2025/09",
      loc: { en: "Remote", zh: "远程" },
      bullets: {
        en: [
          "Integrated an invisible interactive object on the web frontend for bot-detection and request filtering — reduced malicious traffic by 95%+",
          "Developed a proxy-based function-call layer to standardize the web traffic transaction pipeline with a unified logging interface",
          "Simplified debugging and shortened average incident diagnosis time by ~25%, accelerating the feedback cycle",
        ],
        zh: [
          "在 Web 前端集成隐形交互对象用于机器人检测与请求过滤——恶意流量下降 95% 以上",
          "开发基于代理的函数调用层，统一 Web 流量交易管道与日志接口，改善跨团队协作",
          "简化调试流程，平均事故定位时间降低约 25%",
        ],
      },
      stack: ["JavaScript", "Proxy layer", "Logging"],
    },
  ],
  projects: [
    {
      name: "Unifinity AI",
      tag: { en: "Startup · Java + Spring Boot", zh: "创业项目 · Java + Spring Boot" },
      summary: {
        en: "AI marketing platform for SMBs — strategy, content, publish, monitor. Microservices backend, LLM-driven pipelines, Meta Graph integration.",
        zh: "面向中小企业的 AI 营销平台——策略、内容、发布、监控一站式。微服务后端，LLM 驱动，集成 Meta Graph API。",
      },
      metric: "prod",
    },
    {
      name: "What4Dinner",
      tag: { en: "Open source · Spring Boot + React", zh: "开源 · Spring Boot + React" },
      summary: {
        en: "Gemini-powered meal planner that turns cooking screenshots into structured recipes and runs Family Shared Workspaces with voting + grocery lists.",
        zh: "基于 Gemini 的菜单规划：把烹饪截图转成结构化食谱，支持家庭共享工作区、投票和采购清单。",
      },
      metric: "2026",
      accent: true,
    },
    {
      name: "vmalloc / vmfree",
      tag: { en: "Systems · C", zh: "系统编程 · C" },
      summary: {
        en: "Custom memory allocator over a simulated heap — best-fit policy, 16-byte alignment, pointer-arithmetic block headers. Zero memory errors under the full test suite.",
        zh: "基于模拟堆的自定义内存分配器——最佳适配策略、16 字节对齐、指针运算操作块头。测试套件零内存错误。",
      },
      metric: "2025",
    },
    {
      name: "Pish · Unix Shell",
      tag: { en: "Systems · C", zh: "系统编程 · C" },
      summary: {
        en: "A Unix-style shell in C supporting interactive and batch modes. Command loop, tokenizer, three built-ins, persistent history via file I/O.",
        zh: "用 C 实现的 Unix 风格 shell，支持交互和批处理模式。命令循环、分词器、三个内置命令、文件 I/O 持久化历史。",
      },
      metric: "2025",
    },
    {
      name: "AdjacentTalk",
      tag: { en: "Cross-platform · Android + Windows", zh: "跨平台 · Android + Windows" },
      summary: {
        en: "Handcrafted an application-layer protocol over raw TCP/IP sockets. Distributed architecture across 3 servers, ~1,000 concurrent users, sub-50 ms latency.",
        zh: "在裸 TCP/IP socket 上手写应用层协议。三服务器分布式架构，约 1,000 并发用户，延迟低于 50 ms。",
      },
      metric: "2023",
    },
    {
      name: "StudyHelper",
      tag: { en: "Google Play · Android SDK", zh: "Google Play · Android SDK" },
      summary: {
        en: "Java + Android SDK utility app — Memo, Phone Lock, scientific calculator with Normal & T distribution CDF. SQLite persistence, DevicePolicyManager integration.",
        zh: "Java + Android SDK 工具应用——备忘、手机锁、带正态与 T 分布 CDF 的科学计算器。SQLite 持久化 + DevicePolicyManager。",
      },
      metric: "Play Store",
    },
  ],
  oss: [
    { name: "What4Dinner",           role: { en: "Creator · Open source", zh: "作者 · 开源" }, count: "Spring + React" },
  ],
  skills: [
    { group: { en: "Languages", zh: "语言" }, items: ["Java", "Python", "C", "C++", "C#", "SQL", "R", "JavaScript", "HTML/CSS"] },
    { group: { en: "Frameworks", zh: "框架" }, items: ["Spring Boot", "Spring MVC", "Spring Security", "React", "JWT", "OAuth 2.0"] },
    { group: { en: "Data & Infra", zh: "数据与基础架构" }, items: ["MySQL", "Redis", "Docker", "Nginx", "CentOS Linux", "Cloudflare"] },
    { group: { en: "Tools", zh: "工具" }, items: ["IntelliJ IDEA", "PyCharm", "RStudio", "Git", "Linux"] },
  ],
  contact: [
    { label: "Email",   value: "wil018@ucsd.edu",             href: "mailto:wil018@ucsd.edu" },
    { label: "Phone",   value: "+1 (530) 364-8650",           href: "tel:+15303648650" },
    { label: "GitHub",  value: "https://github.com/WilliamLiSDFZ", href: "https://github.com/WilliamLiSDFZ" },
    { label: "LinkedIn",value: "linkedin.com/in/yuze-li-093b67342", href: "https://www.linkedin.com/in/yuze-li-093b67342/" },
  ],
};

// ------- Language helper -------
const t = (val, lang) => {
  if (val == null) return "";
  if (typeof val === "string") return val;
  return val[lang] ?? val.en ?? "";
};

// ------- NAV -------
const NAV = [
  { id: "about",    en: "About",    zh: "关于" },
  { id: "education",en: "Education",zh: "教育" },
  { id: "now",      en: "Now",      zh: "现在" },
  { id: "work",     en: "Work",     zh: "经历" },
  { id: "projects", en: "Projects", zh: "项目" },
  { id: "oss",      en: "Open source", zh: "开源" },
  { id: "skills",   en: "Skills",   zh: "技能" },
  { id: "contact",  en: "Contact",  zh: "联系" },
];

// ------- Small UI atoms -------
function Pill({ children, tone, className = "" }) {
  const styles = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "3px 10px",
    fontSize: 12,
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    fontWeight: 500,
    letterSpacing: "0.01em",
    borderRadius: 999,
    border: "1px solid var(--line)",
    background: tone === "good" ? "var(--good-soft)" : tone === "accent" ? "var(--accent-soft)" : "var(--bg-elev)",
    color: tone === "good" ? "var(--good)" : tone === "accent" ? "var(--accent-ink)" : "var(--ink-2)",
    borderColor: tone === "good" ? "color-mix(in oklch, var(--good) 30%, transparent)" :
                 tone === "accent" ? "color-mix(in oklch, var(--accent) 30%, transparent)" :
                 "var(--line)",
  };
  return <span className={className} style={styles}>{children}</span>;
}

function SectionHeader({ num, label, title, kicker }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
      <div className="mono" style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", minWidth: 48 }}>
        {num} <span style={{ color: "var(--muted-2)" }}>/</span> {label}
      </div>
      <h2 className="serif" style={{ margin: 0, fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--ink)" }}>
        {title}
      </h2>
      {kicker && <div style={{ color: "var(--muted)", fontSize: 14, flex: "1 1 0", minWidth: 160 }}>{kicker}</div>}
    </div>
  );
}

// ------- Header / Nav -------
function TopNav({ lang, setLang, theme, setTheme, openPalette }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 40,
      backdropFilter: "saturate(1.2) blur(12px)",
      background: "color-mix(in oklab, var(--bg) 82%, transparent)",
      borderBottom: "1px solid var(--line)",
    }}>
      <div style={{
        maxWidth: "var(--maxw)", margin: "0 auto",
        padding: "14px var(--pad)",
        display: "flex", alignItems: "center", gap: 18,
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: "var(--ink)", color: "var(--bg)",
            display: "grid", placeItems: "center",
            fontFamily: '"JetBrains Mono", monospace', fontSize: 13, fontWeight: 600,
          }}>YL</div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>
            {CONTENT.name}
            <span className="mono" style={{ color: "var(--muted)", marginLeft: 8, fontWeight: 400, fontSize: 12 }}>
              {lang === "zh" ? CONTENT.nameZh : "backend.eng"}
            </span>
          </div>
        </a>
        <nav style={{ display: "flex", gap: 4, marginLeft: "auto", flexWrap: "wrap" }}>
          {NAV.map(n => (
            <a key={n.id} href={`#${n.id}`} style={{
              padding: "6px 10px", fontSize: 13, color: "var(--ink-2)",
              borderRadius: 8,
            }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--bg-sunk)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {n[lang]}
            </a>
          ))}
        </nav>
        <button onClick={openPalette} className="mono" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 10px", fontSize: 12, color: "var(--muted)",
          background: "var(--bg-elev)", border: "1px solid var(--line)",
          borderRadius: 8, cursor: "pointer",
        }}>
          <span>⌘K</span>
        </button>
        <button onClick={() => setLang(lang === "en" ? "zh" : "en")} className="mono" style={{
          padding: "6px 10px", fontSize: 12,
          background: "var(--bg-elev)", border: "1px solid var(--line)",
          borderRadius: 8, cursor: "pointer", color: "var(--ink-2)",
          minWidth: 56,
        }}>
          {lang === "en" ? "中 / EN" : "EN / 中"}
        </button>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="theme" style={{
          padding: "6px 8px", background: "var(--bg-elev)", border: "1px solid var(--line)",
          borderRadius: 8, cursor: "pointer", color: "var(--ink-2)", display: "grid", placeItems: "center",
        }}>
          {theme === "dark"
            ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            : <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>}
        </button>
      </div>
    </header>
  );
}

// ------- Hero -------
function Hero({ lang }) {
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

// ------- About -------
function About({ lang }) {
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
function AsideKV({ k, v }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 13 }}>
      <span className="mono" style={{ color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em", fontSize: 11 }}>{k}</span>
      <span style={{ color: "var(--ink)", fontWeight: 500 }}>{v}</span>
    </div>
  );
}

// ------- Education -------
function Education({ lang }) {
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

// ------- Now -------
function Now({ lang }) {
  return (
    <section id="now" style={sectionWrap}>
      <SectionHeader
        num="03"
        label="Now"
        title={lang === "zh" ? "眼下在做" : "What I'm doing now"}
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

// ------- Work -------
function Work({ lang }) {
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

// ------- Projects -------
function Projects({ lang }) {
  return (
    <section id="projects" style={sectionWrap}>
      <SectionHeader num="05" label={lang === "zh" ? "项目" : "Projects"} title={lang === "zh" ? "近期项目" : "Selected projects"} />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 14,
      }}>
        {CONTENT.projects.map((p, i) => (
          <a key={i} href="#" style={{
            position: "relative",
            background: p.accent ? "var(--accent-soft)" : "var(--bg-elev)",
            border: "1px solid",
            borderColor: p.accent ? "color-mix(in oklch, var(--accent) 40%, transparent)" : "var(--line)",
            borderRadius: "var(--radius)",
            padding: "calc(22px * var(--density))",
            display: "flex", flexDirection: "column", gap: 10,
            minHeight: 180,
            transition: "transform .25s ease, box-shadow .25s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px -12px color-mix(in oklab, var(--ink) 18%, transparent)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
              <h3 className="serif" style={{ margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--ink)" }}>
                {p.name}
              </h3>
              <span className="mono" style={{ fontSize: 11, color: p.accent ? "var(--accent-ink)" : "var(--muted)" }}>{p.metric}</span>
            </div>
            <div className="mono" style={{ fontSize: 11, color: p.accent ? "var(--accent-ink)" : "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {t(p.tag, lang)}
            </div>
            <p style={{ margin: "auto 0 0", color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55 }}>
              {t(p.summary, lang)}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: p.accent ? "var(--accent-ink)" : "var(--muted)", fontSize: 12 }}>
              <span className="mono">{lang === "zh" ? "查看" : "View"}</span>
              <span>→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ------- OSS -------
function OSS({ lang }) {
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

// ------- Skills -------
function Skills({ lang }) {
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

// ------- Contact -------
function Contact({ lang }) {
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

const sectionWrap = {
  maxWidth: "var(--maxw)",
  margin: "0 auto",
  padding: "calc(56px * var(--density)) var(--pad)",
  borderTop: "1px solid var(--line)",
};

// ------- Command palette -------
function CommandPalette({ open, onClose, lang, setLang, setTheme, theme }) {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);
  useEffect(() => { if (open) { setQ(""); setTimeout(() => inputRef.current?.focus(), 20); } }, [open]);

  const items = useMemo(() => {
    const nav = NAV.map(n => ({ kind: "nav", id: n.id, label: n[lang], hint: `→ #${n.id}` }));
    const actions = [
      { kind: "action", id: "toggle-theme", label: lang === "zh" ? "切换深色/浅色" : "Toggle dark mode", hint: theme === "dark" ? "dark → light" : "light → dark", run: () => setTheme(theme === "dark" ? "light" : "dark") },
      { kind: "action", id: "toggle-lang", label: lang === "zh" ? "English" : "中文", hint: lang === "zh" ? "zh → en" : "en → zh", run: () => setLang(lang === "zh" ? "en" : "zh") },
      { kind: "action", id: "mail", label: lang === "zh" ? "发送邮件" : "Send email", hint: "yuze@yuze.li", run: () => { window.location.href = "mailto:yuze@yuze.li"; } },
      { kind: "action", id: "cv", label: lang === "zh" ? "下载简历" : "Download CV", hint: ".pdf" },
    ];
    const all = [...actions, ...nav];
    if (!q) return all;
    const s = q.toLowerCase();
    return all.filter(x => x.label.toLowerCase().includes(s) || (x.hint || "").toLowerCase().includes(s));
  }, [q, lang, theme]);

  const [idx, setIdx] = useState(0);
  useEffect(() => setIdx(0), [q]);

  const runItem = useCallback((it) => {
    if (!it) return;
    if (it.kind === "nav") {
      document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (it.run) it.run();
    onClose();
  }, [onClose]);

  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "color-mix(in oklab, var(--ink) 30%, transparent)",
      backdropFilter: "blur(4px)",
      display: "grid", placeItems: "start center",
      paddingTop: "14vh",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: "min(560px, 92vw)",
        background: "var(--bg-elev)", border: "1px solid var(--line-strong)",
        borderRadius: 14, overflow: "hidden",
        boxShadow: "0 30px 80px -20px color-mix(in oklab, var(--ink) 40%, transparent)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderBottom: "1px solid var(--line)" }}>
          <span className="mono" style={{ color: "var(--muted)", fontSize: 12 }}>⌘</span>
          <input
            ref={inputRef}
            value={q}
            onChange={e => setQ(e.target.value)}
            onKeyDown={e => {
              if (e.key === "ArrowDown") { e.preventDefault(); setIdx(i => Math.min(items.length - 1, i + 1)); }
              else if (e.key === "ArrowUp") { e.preventDefault(); setIdx(i => Math.max(0, i - 1)); }
              else if (e.key === "Enter") { e.preventDefault(); runItem(items[idx]); }
              else if (e.key === "Escape") onClose();
            }}
            placeholder={lang === "zh" ? "搜索或跳转…" : "Search or jump to…"}
            style={{
              flex: 1, border: 0, outline: 0, background: "transparent",
              fontSize: 15, color: "var(--ink)", fontFamily: "inherit",
            }}
          />
          <span className="mono" style={{ fontSize: 10, color: "var(--muted-2)" }}>ESC</span>
        </div>
        <div style={{ maxHeight: 340, overflow: "auto", padding: 6 }}>
          {items.length === 0 && (
            <div className="mono" style={{ padding: 18, color: "var(--muted)", fontSize: 13, textAlign: "center" }}>
              {lang === "zh" ? "没有匹配项" : "No matches"}
            </div>
          )}
          {items.map((it, i) => (
            <div
              key={it.id}
              onMouseEnter={() => setIdx(i)}
              onClick={() => runItem(it)}
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "10px 12px", borderRadius: 8,
                background: i === idx ? "var(--bg-sunk)" : "transparent",
                cursor: "pointer",
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="mono" style={{ fontSize: 10, color: "var(--muted-2)", textTransform: "uppercase", letterSpacing: "0.08em", width: 42 }}>
                  {it.kind === "nav" ? "goto" : "do"}
                </span>
                <span style={{ fontSize: 14 }}>{it.label}</span>
              </div>
              <span className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>{it.hint}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ------- Tweaks panel (host-connected) -------
function TweaksPanel({ enabled, theme, setTheme, accent, setAccent, density, setDensity, lang, setLang }) {
  if (!enabled) return null;
  return (
    <div style={{
      position: "fixed", right: 16, bottom: 16, zIndex: 80,
      width: 260,
      background: "var(--bg-elev)", border: "1px solid var(--line-strong)",
      borderRadius: 14, padding: 14,
      boxShadow: "0 18px 40px -16px color-mix(in oklab, var(--ink) 35%, transparent)",
      fontFamily: "inherit",
    }}>
      <div className="mono" style={{ fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>
        Tweaks
      </div>
      <TweakRow label={lang === "zh" ? "主题" : "Theme"}>
        <Seg value={theme} onChange={setTheme} options={[["light","Light"],["dark","Dark"]]} />
      </TweakRow>
      <TweakRow label={lang === "zh" ? "语言" : "Language"}>
        <Seg value={lang} onChange={setLang} options={[["en","EN"],["zh","中"]]} />
      </TweakRow>
      <TweakRow label={lang === "zh" ? "密度" : "Density"}>
        <Seg value={density} onChange={setDensity} options={[["compact","Compact"],["comfortable","Comfy"]]} />
      </TweakRow>
      <TweakRow label={lang === "zh" ? "强调色" : "Accent"}>
        <div style={{ display: "flex", gap: 6 }}>
          {[[250,"Blue"],[145,"Green"],[30,"Amber"],[0,"Rose"],[295,"Violet"]].map(([h, lbl]) => (
            <button key={h} title={lbl} onClick={() => setAccent(h)} style={{
              width: 22, height: 22, borderRadius: 99,
              border: accent === h ? "2px solid var(--ink)" : "1px solid var(--line)",
              background: `oklch(0.62 0.14 ${h})`,
              padding: 0, cursor: "pointer",
            }} />
          ))}
        </div>
      </TweakRow>
    </div>
  );
}
function TweakRow({ label, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", fontSize: 12, color: "var(--ink-2)" }}>
      <span style={{ color: "var(--muted)" }}>{label}</span>
      {children}
    </div>
  );
}
function Seg({ value, onChange, options }) {
  return (
    <div style={{ display: "inline-flex", background: "var(--bg-sunk)", borderRadius: 8, padding: 2, border: "1px solid var(--line)" }}>
      {options.map(([v, lbl]) => (
        <button key={v} onClick={() => onChange(v)} style={{
          padding: "4px 10px", fontSize: 11, borderRadius: 6,
          background: value === v ? "var(--bg-elev)" : "transparent",
          border: 0, cursor: "pointer",
          color: value === v ? "var(--ink)" : "var(--muted)",
          fontFamily: "inherit",
        }}>{lbl}</button>
      ))}
    </div>
  );
}

// ------- App -------
function App() {
  const [theme, setThemeState] = useState(TWEAKS.theme);
  const [accent, setAccentState] = useState(TWEAKS.accent);
  const [density, setDensityState] = useState(TWEAKS.density);
  const [lang, setLangState] = useState(TWEAKS.lang);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  // Persist + apply
  const persist = (patch) => window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
  const setTheme = v => { setThemeState(v); persist({ theme: v }); };
  const setAccent = v => { setAccentState(v); persist({ accent: v }); };
  const setDensity = v => { setDensityState(v); persist({ density: v }); };
  const setLang = v => { setLangState(v); persist({ lang: v }); };

  useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]);
  useEffect(() => { document.documentElement.style.setProperty("--accent-h", String(accent)); }, [accent]);
  useEffect(() => {
    document.documentElement.style.setProperty("--density", density === "compact" ? "0.72" : "1");
  }, [density]);
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    document.body.setAttribute("data-lang", lang);
  }, [lang]);

  // Command palette shortcut
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen(o => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Tweaks host handshake
  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") setTweaksOpen(true);
      if (e.data.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  return (
    <div>
      <TopNav lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} openPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Education lang={lang} />
        <Now lang={lang} />
        <Work lang={lang} />
        <Projects lang={lang} />
        <OSS lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
      </main>
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        lang={lang} setLang={setLang}
        theme={theme} setTheme={setTheme}
      />
      <TweaksPanel
        enabled={tweaksOpen}
        theme={theme} setTheme={setTheme}
        accent={accent} setAccent={setAccent}
        density={density} setDensity={setDensity}
        lang={lang} setLang={setLang}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
