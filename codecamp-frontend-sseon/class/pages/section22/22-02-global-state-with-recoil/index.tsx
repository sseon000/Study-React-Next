// import { useState } from "react";
import BoardWrite from "../../../src/components/units/22-global-state/BoardWrite.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/stores";
import { useEffect } from "react";

export default function GlobalStateWithRecoilPage(props: any): JSX.Element {
  //   const [isEdit, setIsEdit] = useState(true);
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  //   return <BoardWrite isEdit={isEdit} />;
  return <BoardWrite />;
}
