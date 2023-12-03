import { makeAutoObservable } from "mobx"
import { KnowStatus, IWord } from "../types";

export class Word implements IWord{
  word: string = '';
  createTime: number = 0;
  deleteTime: number = 0;
  isDelete: boolean = false;
  order: number = 0;
  knowStatus: KnowStatus = KnowStatus.New;

  constructor(word: string) {
    makeAutoObservable(this);
    this.word = word;
    this.createTime = Date.now();
  }

  toJSON() {
    return {
      word: this.word,
      createTime: this.createTime,
      deleteTime: this.deleteTime,
      isDelete: this.isDelete,
      order: this.order,
      knowStatus: this.knowStatus,
    }
  }
}

export class WordsStore {
  words: Word[] = [];
  currentIndex: number = 0;
  isAddWordModalOpen: boolean = false;
  tmpWord: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  addWord(word: string) {
    if (!this.isWordExist(word)) {
      this.words.push(new Word(word));
    }
  }

  getCurrentWord() {
    return this.words[this.currentIndex]
  }

  private isWordExist(word: string) {
    return this.words.some(w => w.word === word)
  }
}

export const wordsStore = new WordsStore();
wordsStore.addWord('人')