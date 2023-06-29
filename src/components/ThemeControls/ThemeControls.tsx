import { useState } from "react";
import useTheme from "../../hooks/useTheme";
import styles from "./theme-controls.module.scss";

export default function ThemeControls() {
  const { theme, fonts, setDarkMode, setFontClass } = useTheme();
  const { darkMode, fontClass } = theme;
  const [currentFont, setCurrentFont] = useState(fonts[fontClass]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.controls}>
      <div className={`${styles.dropdown} ${isOpen ? styles["dropdown--open"] : ""}`}>
        <button
          className={styles.dropdown__open}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {currentFont}
          <img src="images/icon-arrow-down.svg" alt="down arrow" className={styles.dropdown__arrow} />
        </button>
        <div className={`${styles.dropdown__menu}  ${darkMode ? styles["dropdown__menu--dark"] : ""}`}>
          {Object.entries(fonts).map(([fontClass, fontName]) => {
            return (
              <button
                key={fontClass}
                className={`${styles.dropdown__font} ${styles[`dropdown__font--${fontClass}`]}`}
                onClick={() => {
                  setCurrentFont(fontName);
                  setFontClass(fontClass);
                  setIsOpen(false);
                }}
              >
                {fontName}
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles.controls__divider}></div>
      <div className={styles.theme}>
        <label htmlFor="theme-toggle" className={`${styles.toggle} ${darkMode ? styles["toggle--active"] : ""}`}>
          <input
            id="theme-toggle"
            type="checkbox"
            className={styles.toggle__check}
            checked={darkMode}
            onChange={() => {
              setDarkMode(!darkMode);
            }}
          />
        </label>
        <svg width="22" height="22" viewBox="0 0 22 22" className={darkMode ? styles["theme__moon--enabled"] : ""}>
          <use xlinkHref="images/icon-moon.svg#moon"></use>
        </svg>
      </div>
    </div>
  );
}
