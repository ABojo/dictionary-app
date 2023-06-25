import { useEffect, useState } from "react";
import storage from "../utils/storage";

interface Theme {
  darkMode: boolean;
  fontFamily: string;
}

//inital theme state being built with stored data/fallbacks
const initialTheme: Theme = {
  darkMode: storage.getDarkMode(),
  fontFamily: storage.getFontFamily() || "sans",
};

//hook to update state, local storage, and run a side effect to update the theme classes
export default function useTheme() {
  const [theme, setTheme] = useState(initialTheme);
  const { darkMode, fontFamily } = theme;

  //wipe and rebuild the classes attached to the root element when theme state changes
  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.className = `${darkMode && "dark"} ${fontFamily}`;
  }, [darkMode, fontFamily]);

  function setDarkMode(isEnabled: boolean) {
    setTheme({ ...theme, darkMode: isEnabled });
    storage.setDarkMode(isEnabled);
  }

  function setFontFamily(fontFamily: string) {
    setTheme({ ...theme, fontFamily });
    storage.setFontFamily(fontFamily);
  }

  return { theme, setDarkMode, setFontFamily };
}
