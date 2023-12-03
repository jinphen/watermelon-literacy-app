import React, { useCallback } from "react";
import { useStore } from "@/app/context";
import { Dialog, Input } from "antd-mobile";

export function useAddWord() {
  const store = useStore();

  const onAddClick = useCallback(() => {
    Dialog.confirm({
      title: "Add Word",
      content: (
        <Input
          className="block w-full rounded-md border-0 py-1.5 p-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
          onChange={(value) => (store.tmpWord = value)}
          autoFocus={true}
        />
      ),
      onConfirm: () => {
        if (!store.tmpWord) {
          return Promise.reject();
        }
        store.addWord(store.tmpWord);
        store.tmpWord = "";
      },
    });
  }, [store]);

  return onAddClick;
}
