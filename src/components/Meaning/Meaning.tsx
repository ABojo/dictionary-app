import styles from "./meaning.module.scss";
import { Meaning as MeaningType } from "../../utils/getWord";

interface MeaningProps {
  meaningInfo: MeaningType;
}

export default function Meaning({ meaningInfo }: MeaningProps) {
  const { partOfSpeech, definitions, synonyms } = meaningInfo;

  return (
    <div className={styles.meaning}>
      <h2 className={styles.meaning__heading}>{partOfSpeech}</h2>
      <span className={styles.meaning__text}>Meaning</span>
      <ul className={styles.meaning__list}>
        {definitions?.map((definition) => {
          return (
            <li className={styles.meaning__item}>
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
                <li className={styles.synonyms__item}>
                  <button className={styles.synonyms__button}>{synonym}</button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
