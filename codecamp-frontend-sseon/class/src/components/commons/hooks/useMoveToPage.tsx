import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores";

interface IUseMoveToPageReturn {
  visitedPage: string;
  onClickMoveToPage: (path: string) => () => void;
}
export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();

  // 1. 요건 특정 페이지에서 다른 페이지로 이동
  // 2. 다른 페이지는 로그인 후 이용가능해서 로그인 페이지로 이동
  // 3. 로그인 후 이전 페이지(다른 페이지로 다시 이동)
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    // 로그인이 필요한 페이지일 경우엔 제외하는 조건 추가하기
    setVisitedPage(path); // 방법1. recoil
    // localStorage.setItem("visitedPage", path) // 방법2. localstorage
    void router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
};
