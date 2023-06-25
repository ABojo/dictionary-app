export default (function () {
  const storeKeys = {
    darkMode: "dark",
    fontFamily: "fontFamily",
  };

  function getDarkMode(): boolean {
    return localStorage.getItem(storeKeys.darkMode) === "true";
  }

  function setDarkMode(isEnabled: boolean): void {
    localStorage.setItem(storeKeys.darkMode, isEnabled.toString());
  }

  function getFontFamily(): string | null {
    return localStorage.getItem(storeKeys.fontFamily);
  }

  function setFontFamily(fontFamily: string): void {
    localStorage.setItem(storeKeys.fontFamily, fontFamily);
  }

  return { getDarkMode, setDarkMode, getFontFamily, setFontFamily };
})();
