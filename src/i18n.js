export const t = (val, lang) => {
  if (val == null) return "";
  if (typeof val === "string") return val;
  return val[lang] ?? val.en ?? "";
};
