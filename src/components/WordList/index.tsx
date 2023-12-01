import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/app/context";

const WordList = () => {
  const store = useStore();
  return (
    <div className="w-full flex gap-4 snap-x overflow-x-auto p-5 fixed bottom-0 left-0">
      {store.words.map((w) => {
        const word = w.word;
        return (
          <div
            key={word}
            className="scroll-ml-6 snap-start bg-slate-300 w-10 h-6 text-center"
          >
            <span>{word}</span>
          </div>
        );
      })}
    </div>
  );
};

export default observer(WordList);
