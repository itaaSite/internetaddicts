async function getMod() {
  return import("./3_91430590.mjs");
}
const collectedLinks = "@@ASTRO-LINKS@@";
const collectedStyles = "@@ASTRO-STYLES@@";
const collectedScripts = "@@ASTRO-SCRIPTS@@";
const defaultMod = {
  __astroPropagation: true,
  getMod,
  collectedLinks,
  collectedStyles,
  collectedScripts,
};

export { defaultMod as default };
