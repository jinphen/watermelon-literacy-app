'use client'

import { createContext, useContext } from "react";
import { wordsStore } from "../store";

export const WordsContext = createContext(wordsStore);

export function useStore() {
  const store = useContext(WordsContext);
  return store;
}