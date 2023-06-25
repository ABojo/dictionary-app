import styles from "./header.module.scss";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src="images/logo.svg" alt="Logo" />
    </header>
  );
}
