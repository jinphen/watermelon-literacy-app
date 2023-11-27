import { useStore } from "@/app/context";
import React from "react";

export const WordPanel: React.FC = () => {
  const store = useStore();
  const word = store.getCurrentWord();

  return <div>{word?.word}</div>;
};
