import ClipLoader from "react-spinners/ClipLoader";
import styles from "./spinner.module.scss";

export default function Spinner() {
  return (
    <div className={styles.container}>
      <ClipLoader size={"5rem"} color={"var(--color-primary)"} />
    </div>
  );
}
