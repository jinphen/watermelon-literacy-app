import React from "react";
import PlusCircle from "../Icons/PlusCircle";
import { observer } from "mobx-react-lite";
import { useAddWord } from "./useAddWord";

const Toolbar = () => {
  const onAddClick = useAddWord();

  return (
    <>
      <div className="fixed top-0 p-2 flex w-full">
        <PlusCircle onClick={onAddClick} />
      </div>
    </>
  );
};

export default observer(Toolbar);
