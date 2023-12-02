import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/stores";

// export default function BoardWriteUI(props: any): JSX.Element {
export default function BoardWriteUI(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  //   return <div>{props.isEdit === true ? "수정하기" : "등록하기"}</div>;
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}
