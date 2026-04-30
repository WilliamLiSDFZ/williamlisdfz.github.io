export const sectionWrap = {
  maxWidth: "var(--maxw)",
  margin: "0 auto",
  padding: "calc(56px * var(--density)) var(--pad)",
  borderTop: "1px solid var(--line)",
};

export function Pill({ children, tone, className = "" }) {
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

export function SectionHeader({ num, label, title, kicker }) {
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

export function AsideKV({ k, v }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 13 }}>
      <span className="mono" style={{ color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em", fontSize: 11 }}>{k}</span>
      <span style={{ color: "var(--ink)", fontWeight: 500 }}>{v}</span>
    </div>
  );
}

export function TweakRow({ label, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", fontSize: 12, color: "var(--ink-2)" }}>
      <span style={{ color: "var(--muted)" }}>{label}</span>
      {children}
    </div>
  );
}

export function Seg({ value, onChange, options }) {
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
