import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

interface IPaginationProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  lastPage: number;
}
export default function Pagination(props: IPaginationProps): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  // 이미 받았던걸 재요청하기
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void props.refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= props.lastPage) {
      setStartPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
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
    </div>
  );
}
