export const CONTENT = {
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

export const NAV = [
  { id: "about",    en: "About",    zh: "关于" },
  { id: "education",en: "Education",zh: "教育" },
  { id: "now",      en: "Now",      zh: "现在" },
  { id: "work",     en: "Work",     zh: "经历" },
  { id: "projects", en: "Projects", zh: "项目" },
  { id: "oss",      en: "Open source", zh: "开源" },
  { id: "skills",   en: "Skills",   zh: "技能" },
  { id: "contact",  en: "Contact",  zh: "联系" },
];
