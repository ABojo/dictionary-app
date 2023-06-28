import { useEffect, useState } from "react";
import storage from "../utils/storage";

interface Theme {
  darkMode: boolean;
  fontClass: string;
}

//inital theme state being built with stored data/fallbacks
const initialTheme: Theme = {
  darkMode: storage.getDarkMode(),
  fontClass: storage.getFontFamily() || "sans",
};

//hook to update state, local storage, and run a side effect to update the theme classes
export default function useTheme() {
  const [theme, setTheme] = useState(initialTheme);
  const { darkMode, fontClass } = theme;

  //map of font classes and their formatted names
  const fonts: { [k: string]: string } = {
    sans: "Sans Serif",
    serif: "Serif",
    mono: "Mono",
  };

  //wipe and rebuild the classes attached to the root element when theme state changes
  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.className = `${darkMode && "dark"} ${fontClass}`;
  }, [darkMode, fontClass]);

  function setDarkMode(isEnabled: boolean) {
    setTheme({ ...theme, darkMode: isEnabled });
    storage.setDarkMode(isEnabled);
  }

  function setFontClass(fontClass: string) {
    setTheme({ ...theme, fontClass });
    storage.setFontFamily(fontClass);
  }

  return { theme, fonts, setDarkMode, setFontClass };
}
