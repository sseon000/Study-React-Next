import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import BoardList from "../../../src/components/units/15-05-pagination-boardList/BoardList";
import Pagination from "../../../src/components/commons/pagination";

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

export default function BoardPage(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage =
    dataBoardsCount != null
      ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
      : 1;

  return (
    <>
      <BoardList data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </>
  );
}
