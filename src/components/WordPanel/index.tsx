import { useStore } from "@/app/context";
import React from "react";
import Toolbar from "../Toolbar";
import WordList from "../WordList";

import styles from "./styles.module.css";

export const WordPanel: React.FC = () => {
  const store = useStore();
  const word = store.getCurrentWord();

  return (
    <main className="flex min-h-screen flex-col justify-center p-1 relative">
      <Toolbar />
      <div className="text-center">
        <div className={styles.screenWord}>{word?.word}</div>
      </div>
      <WordList />
    </main>
  );
};
