import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
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

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingPaMovedge(): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // 객체 안에서 변수 이름 바꾸기 : data가 중복이므로 data: 바꿀이름으로 바꾼다
  // data도 일종의 state로 api res를 받아오면 리렌더링됨 > globalstate
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  // 이미 받았던걸 재요청하기
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    // 시작페이지가 1이면 이전페이지 클릭이 필요없음
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    // 다음페이지 클릭은 현재 시작페이지+10(페이징수)를 더한게 마지막페이지보다 작아야만 의미가 있음
    // ex)시작페이지 = 11인데 마지막페이지가 19인경우엔 다음페이지 클릭이 필요없음
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
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
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              style={{ margin: "5px" }}
            >
              {index + startPage}
            </span>
          )
      )}
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
