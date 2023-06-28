import styles from "./header.module.scss";
import ThemeControls from "../ThemeControls/ThemeControls";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src="images/logo.svg" alt="Logo" />
      <ThemeControls />
    </header>
  );
}
