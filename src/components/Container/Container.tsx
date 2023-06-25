import styles from "./container.module.scss";

export default function Container({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}
