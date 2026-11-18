export const CONTENT = {
  name: "Yuze Li",
  nameZh: "李雨泽",
  role: {
    en: "Backend & ML Engineer · Co-founder",
    zh: "后端 & 机器学习工程师 · 联合创始人",
  },
  tagline: {
    en: "Math-CS student at UC San Diego. I research retrieval for LLM agents — mining cross-domain ideas from 38k papers — and build the microservices backend of an AI marketing startup.",
    zh: "加州大学圣地亚哥分校数学-计算机在读。研究 LLM agent 的检索——从 3.8 万篇论文中挖掘跨领域思路——同时为一家 AI 营销创业公司搭建微服务后端。",
  },
  location: { en: "San Diego, CA · Remote-friendly", zh: "加州圣地亚哥 · 远程友好" },
  availability: {
    en: "Open to SWE / ML internships (Summer 2027) & 2027 new-grad roles",
    zh: "寻找 2027 夏季软件工程 / ML 实习及 2027 届全职岗位",
  },
  seeking: {
    en: "Summer 2027 intern · 2027 new grad",
    zh: "2027 夏实习 · 2027 届全职",
  },
  gpa: "3.77 / 4.0",
  about: {
    en: [
      "I'm Yuze — a Math-CS undergrad at UC San Diego (expected 2027) and co-founder & VP of Engineering at Unifinity AI, an AI marketing platform for small businesses. On the startup side I spend my days in Java + Spring Boot, designing microservices, auth, and real-time pipelines.",
      "On the research side I work on analogy-augmented ML: building a 38k-paper knowledge base and retrieval agents that help AutoML systems like MLEvolve borrow mechanisms from other domains. Outside of both, I build things in C/C++ to stay close to the metal — allocators, shells, compressors, graph libraries.",
    ],
    zh: [
      "我是李宇泽——UCSD 数学与计算机本科在读（预计 2027 毕业），同时是 Unifinity AI 的联合创始人兼工程 VP，我们在做一个面向中小企业的 AI 营销平台。创业这边日常主要写 Java + Spring Boot，设计微服务、认证系统和实时数据管道。",
      "研究方面我在做类比增强的机器学习：搭建 3.8 万篇论文的知识库和检索 agent，帮助 MLEvolve 等 AutoML 系统从其他领域借鉴机制。除此之外，会用 C/C++ 写点贴近底层的东西——内存分配器、shell、压缩工具、图算法库。",
    ],
  },
  now: {
    en: [
      "Researching analogy-based retrieval for AutoML agents (MLEvolve, autoresearch) on a 38k-paper knowledge base",
      "Building Unifinity AI's backend — auth service, async image-generation queues, Meta Graph publishing",
      "Taking Operating Systems at UCSD",
      "Open to Summer 2027 SWE / ML internships and 2027 new-grad roles",
    ],
    zh: [
      "在 3.8 万篇论文知识库上研究面向 AutoML agent（MLEvolve、autoresearch）的类比检索",
      "开发 Unifinity AI 后端——统一认证服务、异步图像生成队列、Meta Graph 发布",
      "在修 UCSD 的操作系统课",
      "寻找 2027 夏季软件工程 / ML 实习及 2027 届全职岗位",
    ],
  },
  nowUpdated: "2026-11-18",
  education: [
    {
      school: { en: "University of California, San Diego", zh: "加州大学圣地亚哥分校" },
      degree: { en: "B.S. in Mathematics – Computer Science", zh: "数学-计算机科学学士" },
      period: { en: "Expected 06/2027", zh: "预计 2027/06 毕业" },
      meta: { en: "UC GPA 3.77 / 4.0 · Provost Honors", zh: "UC GPA 3.77 / 4.0 · Provost Honors" },
      courses: [
        "Deep Learning", "ML: Learning Algorithms", "Computer Vision",
        "Advanced Data Structures", "Computer Organization", "Theory of Computation",
        "System Programming & Software Tools", "Operating Systems (in progress)",
        "Mathematical Statistics", "Numerical Analysis", "Discrete Math & Graph Theory",
      ],
    },
    {
      school: { en: "University of California, Davis", zh: "加州大学戴维斯分校" },
      degree: { en: "Data Science (transferred to UC San Diego)", zh: "数据科学（已转学至 UCSD）" },
      period: { en: "08/2023 — 09/2025", zh: "2023/08 — 2025/09" },
      meta: { en: "Dean's Honor List · 4.0 term GPA", zh: "Dean’s Honor List · 4.0 学期 GPA" },
      courses: [
        "Data Structures in C", "Algorithm Design & Analysis", "Discrete Math for CS",
        "Linear Algebra", "Calculus", "Vector Analysis", "Differential Equations",
        "Probability Theory", "Regression Analysis", "Analysis of Variance",
        "Statistical Data Science",
      ],
    },
  ],
  research: [
    {
      title: "Analogy-Augmented ML: Retrieving Cross-Domain Mechanisms from Research Literature",
      role: { en: "Research Assistant · AIBuildAI Agent", zh: "研究助理 · AIBuildAI Agent" },
      advisor: { en: "Advisor: Pengtao Xie", zh: "导师：Pengtao Xie" },
      period: "2026/05 — Now",
      bullets: {
        en: [
          "Built a 38,273-paper knowledge base (NeurIPS, AAAI, ICML, ACL, NAACL), auto-organized via embedding-based agglomerative clustering, LLM topic labels, and one-sentence paper summaries",
          "Two retrieval frameworks: a RAG baseline fusing BGE-M3 dense + BM25 lexical rankings with reciprocal-rank fusion and LLM relevance filtering; and an analogical-reasoning agent that diagnoses solution bottlenecks as (objects, relations, evidence), rewrites them into ~4 cross-domain queries, and retrieves transferable mechanisms from a dependency-free BM25 index",
          "Integrated into two AutoML agents — MLEvolve (Monte Carlo Graph Search) and autoresearch — with a six-arm ablation and citation provenance checks against actual search results and passage reads",
          "On MLE-bench: RAG improved Essay Scoring by +0.00258 QWK and Jigsaw Unintended Bias by +0.10583; the analogy agent raised solution diversity (Vendi) in 7/9 MLEvolve seeds and 6/6 autoresearch runs (up to +0.4323)",
        ],
        zh: [
          "构建 38,273 篇论文知识库（NeurIPS、AAAI、ICML、ACL、NAACL），通过基于 embedding 的层次聚类、LLM 主题标注和单句摘要自动组织",
          "两套检索框架：BGE-M3 稠密检索 + BM25 词法检索经 RRF 融合并由 LLM 过滤的 RAG 基线；以及类比推理 agent——把方案瓶颈诊断为（对象、关系、证据），改写成约 4 条跨领域查询，从无依赖的 BM25 索引中检索可迁移机制",
          "集成进 MLEvolve（蒙特卡洛图搜索）和 autoresearch 两个 AutoML agent，设计六组消融实验，并对照实际检索结果与段落阅读校验引用来源",
          "MLE-bench 结果：RAG 在 Essay Scoring 上 QWK +0.00258、Jigsaw Unintended Bias +0.10583；类比 agent 在 7/9 个 MLEvolve seed 和 6/6 次 autoresearch 运行中提升方案多样性（Vendi，最高 +0.4323）",
        ],
      },
      stack: ["Python", "LLM agents", "RAG", "BM25", "BGE-M3", "MLE-bench"],
    },
    {
      title: "Fine-Tuning BERT & DeBERTa-v3 on the AI2 Reasoning Challenge (ARC)",
      role: { en: "Independent research project · CSE 151B", zh: "独立研究项目 · CSE 151B" },
      period: "2026/06 — 2026/07",
      bullets: {
        en: [
          "Fine-tuned BERT-base and DeBERTa-v3-base on 7,787 multiple-choice science questions with per-option encoding and a 769-parameter softmax head, holding pipeline, training loop and sweep fixed so the checkpoint was the only variable",
          "Swept 72 configurations under fixed seeds; DeBERTa-v3 reached 75.0% Easy / 56.1% Challenge accuracy — 29 points above the best 2018 baseline and ahead of zero-shot GPT-3 on Challenge, with no retrieval",
          "Found optimal hyper-parameters don't transfer across backbones (learning-rate peaks up to 2.5× apart); negation questions were weakest (43.0% vs. 56.1% Challenge average)",
        ],
        zh: [
          "在 7,787 道科学多选题上微调 BERT-base 与 DeBERTa-v3-base：逐选项编码 + 769 参数 softmax 分类头；数据管道、训练循环和扫参协议完全一致，只改变预训练模型",
          "固定随机种子扫描 72 组配置；DeBERTa-v3 达到 Easy 75.0% / Challenge 56.1%，比 2018 年最佳基线高 29 个点，在 Challenge 上超过零样本 GPT-3，且未使用任何检索",
          "发现最优超参不能跨 backbone 迁移（学习率峰值相差可达 2.5 倍）；否定类问题表现最弱（43.0%，Challenge 平均 56.1%）",
        ],
      },
      stack: ["PyTorch", "Hugging Face", "BERT", "DeBERTa-v3"],
    },
  ],
  work: [
    {
      co: "Unifinity AI",
      role: { en: "Co-founder & VP of Engineering", zh: "联合创始人 & 工程 VP" },
      period: "2025/07 — Now",
      loc: { en: "Remote", zh: "远程" },
      bullets: {
        en: [
          "Architected a Spring Boot microservices backend on CentOS/Docker behind Nginx and Cloudflare CDN; designed the online transactional pipeline normalizing real-time user input into 23 relational tables that feed LLM-driven marketing-strategy generation",
          "Built the AI image-generation subsystem: per-user token-bucket limiter + round-robin scheduling for fair QPS across concurrent users, with long-running jobs decoupled from SSE streaming via Pending/Success/Error async queues to avoid firewall timeouts",
          "Delivered a Central Authentication Service (Spring Security, stateless JWT, Google OAuth 2.0 + reCAPTCHA, role-based file manager) shared across all services",
          "Drove feature definition and cross-team coordination from concept to launch; integrated the Meta Graph API to schedule and publish to Instagram and Facebook",
        ],
        zh: [
          "在 CentOS/Docker 上设计 Spring Boot 微服务后端，前置 Nginx 与 Cloudflare CDN；设计在线交易管道，把实时用户输入规整进 23 张关系表，驱动 LLM 生成营销策略",
          "构建 AI 图像生成子系统：每用户令牌桶限流 + 轮询调度，在并发下公平分配 QPS；通过 Pending/Success/Error 异步队列把长任务与 SSE 推送解耦，避免防火墙超时",
          "交付统一认证服务（Spring Security、无状态 JWT、Google OAuth 2.0 + reCAPTCHA、基于角色的文件管理），供所有服务共用",
          "主导功能定义与跨团队协同，从构想到上线；集成 Meta Graph API，在 Instagram 和 Facebook 上定时发布内容",
        ],
      },
      stack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Redis", "Docker", "Nginx", "SSE"],
    },
    {
      co: "Compass Lessons",
      role: { en: "Software Development Intern · ARECIBO AI-as-a-Service", zh: "软件开发实习生 · ARECIBO AI-as-a-Service" },
      period: "2025/07 — 2025/09",
      loc: { en: "Remote", zh: "远程" },
      bullets: {
        en: [
          "Integrated an invisible interactive frontend object for bot detection and request filtering — cut malicious traffic by 95%+ and mitigated scraping and flood attacks",
          "Built a proxy-based function-call layer standardizing the web-traffic transaction pipeline behind a unified logging interface, cutting average incident-diagnosis time by ~25%",
        ],
        zh: [
          "在 Web 前端集成隐形交互对象用于机器人检测与请求过滤——恶意流量下降 95% 以上，缓解爬虫与洪泛攻击",
          "开发基于代理的函数调用层，以统一日志接口规范 Web 流量交易管道，平均事故定位时间降低约 25%",
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
        en: "AI marketing platform for SMBs — strategy, content, publish, monitor. Microservices backend, central auth, LLM-driven pipelines, Meta Graph integration.",
        zh: "面向中小企业的 AI 营销平台——策略、内容、发布、监控一站式。微服务后端、统一认证、LLM 驱动管道，集成 Meta Graph API。",
      },
      metric: "prod",
    },
    {
      name: "What4Dinner",
      tag: { en: "Open source · Spring Boot + React", zh: "开源 · Spring Boot + React" },
      summary: {
        en: "LLM pipeline turning social-media cooking screenshots into structured recipes, plus a Gemini recommender and Shared Workspaces with meal voting and grocery lists. MySQL + Redis, Docker on CentOS.",
        zh: "用 LLM 把社交媒体上的烹饪截图转成结构化食谱，配合 Gemini 推荐，以及支持投票和采购清单的共享工作区。MySQL + Redis，Docker 部署于 CentOS。",
      },
      metric: "2026",
      accent: true,
    },
    {
      name: "Graph Algorithm Library",
      tag: { en: "Algorithms · C++", zh: "算法 · C++" },
      summary: {
        en: "BFS and Dijkstra shortest paths, thresholded connected components, and minimum-connecting-threshold queries. <5 ms queries on 1k+ node graphs; heap Dijkstra ~40× faster than naive O(n²).",
        zh: "BFS 与 Dijkstra 最短路、阈值连通分量、最小连通阈值查询。千节点图上查询 <5 ms；堆优化 Dijkstra 比朴素 O(n²) 快约 40 倍。",
      },
      metric: "2026",
    },
    {
      name: "Huffman Compressor",
      tag: { en: "Systems · C++", zh: "系统编程 · C++" },
      summary: {
        en: "Huffman compressor/decompressor with bitwise codeword packing and a varint header shrinking metadata to ~200 B. 45–60% compression on text, >20 MB/s decompression.",
        zh: "Huffman 压缩/解压工具，位运算打包码字，变长整数头部把元数据压到约 200 B。文本压缩率 45–60%，解压 >20 MB/s。",
      },
      metric: "2026",
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
      tag: { en: "Networking · Raw TCP/IP", zh: "网络 · 裸 TCP/IP" },
      summary: {
        en: "Hand-rolled application-layer protocol over raw sockets. 3-server architecture with failover, ~1,000 concurrent users at sub-50 ms latency; load-tested with 1,200+ concurrent requests.",
        zh: "在裸 socket 上手写应用层协议。三服务器架构带故障转移，约 1,000 并发用户、延迟低于 50 ms；以 1,200+ 并发请求压测验证。",
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
    { group: { en: "Languages", zh: "语言" }, items: ["Python", "Java", "C", "C++", "C#", "SQL", "R", "JavaScript", "HTML/CSS"] },
    { group: { en: "Frameworks", zh: "框架" }, items: ["Spring Boot", "Spring MVC", "Spring Security", "React", "Android SDK"] },
    { group: { en: "Systems", zh: "系统与基础架构" }, items: ["Linux (CentOS)", "Docker", "Kubernetes", "Nginx", "TCP/IP", "Redis", "MySQL", "REST & SSE", "CI/CD"] },
    { group: { en: "AI / ML", zh: "AI / 机器学习" }, items: ["PyTorch", "Hugging Face Transformers", "FAISS", "BM25", "BGE-M3", "Sentence-BERT", "RAG / hybrid retrieval", "LLM orchestration", "Prompt engineering"] },
    { group: { en: "Tools", zh: "工具" }, items: ["Git", "IntelliJ IDEA", "PyCharm", "RStudio", "LaTeX"] },
  ],
  contact: [
    { label: "Email",   value: "liyuze2004@gmail.com",             href: "mailto:liyuze2004@gmail.com" },
    { label: "Phone",   value: "+1 (530) 364-8650",           href: "tel:+15303648650" },
    { label: "GitHub",  value: "https://github.com/WilliamLiSDFZ", href: "https://github.com/WilliamLiSDFZ" },
    { label: "LinkedIn",value: "linkedin.com/in/yuze-li-093b67342", href: "https://www.linkedin.com/in/yuze-li-093b67342/" },
  ],
  cvHref: `${import.meta.env.BASE_URL}uploads/CV_YuzeLi.pdf`,
};

export const NAV = [
  { id: "about",    en: "About",    zh: "关于" },
  { id: "education",en: "Education",zh: "教育" },
  { id: "research", en: "Research", zh: "研究" },
  { id: "now",      en: "Now",      zh: "现在" },
  { id: "work",     en: "Work",     zh: "经历" },
  { id: "projects", en: "Projects", zh: "项目" },
  { id: "oss",      en: "Open source", zh: "开源" },
  { id: "skills",   en: "Skills",   zh: "技能" },
  { id: "contact",  en: "Contact",  zh: "联系" },
];
