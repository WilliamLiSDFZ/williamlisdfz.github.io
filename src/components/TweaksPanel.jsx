import { Seg, TweakRow } from "./atoms.jsx";

export function TweaksPanel({ enabled, theme, setTheme, accent, setAccent, density, setDensity, lang, setLang }) {
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
