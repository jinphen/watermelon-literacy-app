"use client";

import { WordsContext } from "./context";
import { wordsStore } from "../store";
import { WordPanel } from "@/components/WordPanel/index";

export default function Home() {
  return (
    <WordsContext.Provider value={wordsStore}>
      <WordPanel />
    </WordsContext.Provider>
  );
}
