import styles from "./meaning.module.scss";
import { Meaning as MeaningType } from "../../utils/getWord";

interface MeaningProps {
  meaningInfo: MeaningType;
  setCurrentWord: React.Dispatch<React.SetStateAction<string>>;
}

export default function Meaning({ meaningInfo, setCurrentWord }: MeaningProps) {
  const { partOfSpeech, definitions, synonyms } = meaningInfo;

  return (
    <div className={styles.meaning}>
      <h2 className={styles.meaning__heading}>{partOfSpeech}</h2>
      <span className={styles.meaning__text}>Meaning</span>
      <ul className={styles.meaning__list}>
        {definitions?.map((definition) => {
          return (
            <li className={styles.meaning__item} key={definition.definition}>
              <div>
                <span className={styles.meaning__definition}>{definition.definition}</span>
                {definition.example ? <span className={styles.meaning__example}>"{definition.example}"</span> : null}
              </div>
            </li>
          );
        })}
      </ul>
      {synonyms.length ? (
        <div className={styles.synonyms}>
          <h3 className={styles.synonyms__heading}>Synonyms</h3>
          <ul className={styles.synonyms__list}>
            {synonyms.map((synonym) => {
              return (
                <li className={styles.synonyms__item} key={synonym}>
                  <button
                    className={styles.synonyms__button}
                    onClick={() => {
                      setCurrentWord(synonym);
                    }}
                  >
                    {synonym}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
