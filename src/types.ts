export enum KnowStatus {
  New,
  Familiar,
  Recognized
}

export interface IWord {
  word: string;
  createTime: number;
  deleteTime: number;
  isDelete: boolean;
  order: number;
  knowStatus: KnowStatus;
}