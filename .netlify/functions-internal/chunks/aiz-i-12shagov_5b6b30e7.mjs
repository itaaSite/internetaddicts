async function getMod() {
  return import("./aiz-i-12shagov_3c3ca563.mjs");
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
