import { useMoveToPage } from "../../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseAuthPage(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <div onClick={onClickMoveToPage("/boards")}>게시판으로 이동</div>
      <div onClick={onClickMoveToPage("/markets")}>마켓으로 이동</div>
      <div onClick={onClickMoveToPage("/mypages")}>마이페이지으로 이동</div>
    </>
  );
}
