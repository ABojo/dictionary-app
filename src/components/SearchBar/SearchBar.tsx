import styles from "./search-bar.module.scss";
import { useState } from "react";

interface SearchBarProps {
  onSubmit: (keyword: string) => void;
  inputHook: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function SearchBar({ onSubmit, inputHook }: SearchBarProps) {
  console.log(inputHook);
  const [inputValue, setInputValue] = inputHook;
  const [isInvalid, setIsInvalid] = useState(false);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();

    if (!inputValue) {
      return setIsInvalid(true);
    }

    setIsInvalid(false);
    onSubmit(inputValue);
  }

  return (
    <form
      className={`${styles["search-form"]} ${isInvalid ? styles["search-form--invalid"] : ""}`}
      onSubmit={submitHandler}
    >
      <div className={styles["search-form__input-container"]}>
        <input
          className={styles["search-form__input"]}
          placeholder="Search for any word..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
        <button className={styles["search-form__button"]} type="submit">
          <img src="images/icon-search.svg" alt="search icon" />
        </button>
      </div>
      <span className={styles["search-form__error-message"]}>Whoops, can't be empty...</span>
    </form>
  );
}
