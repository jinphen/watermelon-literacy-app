import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/app/context";
import styles from "./styles.module.css";

const WordList = () => {
  const store = useStore();
  return (
    <div className={styles.wordList}>
      <div className={styles.scroll}>
        {store.words.map((w) => {
          const word = w.word;
          return (
            <div key={word} className={styles.word}>
              <span>{word}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default observer(WordList);
