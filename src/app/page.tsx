"use client";

import { WordsContext } from "./context";
import { wordsStore } from "../store";
import { WordPanel } from "@/components/WordPanel";

export default function Home() {
  return (
    <WordsContext.Provider value={wordsStore}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <WordPanel />
      </main>
    </WordsContext.Provider>
  );
}
