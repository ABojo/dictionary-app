import styles from "./error.module.scss";
import { ErrorData } from "../../utils/getWord";

export default function Error({ error }: { error: ErrorData }) {
  const { title, message, resolution } = error;

  return (
    <div className={styles.error}>
      <img src="images/frown.png" alt="Frown Emoji" className={styles.error__icon} />
      <h1 className={styles.error__title}>{title}</h1>
      <p className={styles.error__message}>
        {message} {resolution}
      </p>
    </div>
  );
}
