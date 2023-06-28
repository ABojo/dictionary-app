import { UseQueryResult } from "react-query";
import { ErrorData, WordData } from "../../utils/getWord";
import styles from "./definition.module.scss";
import Meaning from "../Meaning/Meaning";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import getAudioUrl from "../../utils/getAudio";

interface DefinitionProps {
  query: UseQueryResult<WordData, unknown>;
  setCurrentWord: React.Dispatch<React.SetStateAction<string>>;
}

export default function Definition({ query, setCurrentWord }: DefinitionProps) {
  const { isLoading, isError, isSuccess, data, error } = query;

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error error={error as ErrorData} />;
  }

  if (isSuccess) {
    const audioUrl = getAudioUrl(query.data.phonetics);
    const audioFile = new Audio(audioUrl);

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.header__heading}>{data.word}</h1>
            <span className={styles.header__phonetic}>{data.phonetic}</span>
          </div>
          {audioUrl ? (
            <button
              onClick={() => {
                audioFile.play();
              }}
              className={styles.header__play}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 75 75"
                className={styles.header__icon}
              >
                <g fill="#A445ED" fill-rule="evenodd">
                  <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                  <path d="M29 27v21l21-10.5z" />
                </g>
              </svg>
            </button>
          ) : null}
        </header>
        <div className={styles.meanings}>
          {data.meanings.map((meaning, i) => {
            return <Meaning setCurrentWord={setCurrentWord} meaningInfo={meaning} key={i} />;
          })}
        </div>
        <div className={styles.source}>
          <div>
            <span className={styles.source__heading}>Source</span>
            <ul className={styles.source__list}>
              {data.sourceUrls.map((url) => {
                return (
                  <li className={styles.source__item} key={url}>
                    <a href={url} target="_blank" className={styles.source__link}>
                      {url}
                      <img src="images/icon-new-window.svg" alt="Open Icon" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
