import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { NAV } from "../content.js";

export function CommandPalette({ open, onClose, lang, setLang, setTheme, theme }) {
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
  }, [q, lang, theme, setLang, setTheme]);

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
