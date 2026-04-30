import { useState, useEffect } from "react";
import { TWEAKS } from "./tweaks.js";
import { TopNav } from "./components/TopNav.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Education } from "./components/Education.jsx";
import { Now } from "./components/Now.jsx";
import { Work } from "./components/Work.jsx";
import { Projects } from "./components/Projects.jsx";
import { OSS } from "./components/OSS.jsx";
import { Skills } from "./components/Skills.jsx";
import { Contact } from "./components/Contact.jsx";
import { CommandPalette } from "./components/CommandPalette.jsx";
import { TweaksPanel } from "./components/TweaksPanel.jsx";

export default function App() {
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
