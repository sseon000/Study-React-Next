import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingPaMovedge(): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // 이미 받았던걸 재요청하기
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    // if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    setStartPage(startPage + 10);
    void refetch({ page: startPage + 10 });
  };

  // el의 타입은 fetchBoards의 타입을 정하면 됨
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + startPage}
          id={String(index + startPage)}
          onClick={onClickPage}
        >
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}

      {/* <span id="1" onClick={onClickPage}>
        1
      </span>
      <span id="2" onClick={onClickPage}>
        2
      </span>
      <span id="3" onClick={onClickPage}>
        3
      </span> */}
    </div>
  );
}

//
/** nullish-coalescing
 * [ 0, '', false, null, undefined, NaN ] - falsy한 값
 * falsy한 값이 아닌 [ null이나 undefined ] 경우의 수!!
 * [ data ?? data.fetchProfile ] - example
 * 비어있으면? 오른쪽꺼 실행!
 */

/**
 *  <div>18471번 게시글로 이동이 완료되었습니다.</div>
 *  조건부 연산자
 *  <div>작성자 : {data && data.fetchBoards?.writer}</div>
 *  옵셔널체이닝
 *  <div>제목 : {data?.fetchBoards?.title}</div>
 *  삼항연산자
 *  <div> 내용 : {data ? data.fetchBoards?.contents : "로딩중입니다!!"}</div>
 */
