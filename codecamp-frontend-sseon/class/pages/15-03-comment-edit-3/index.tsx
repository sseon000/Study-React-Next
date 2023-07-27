import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "../../src/commons/types/generated/types";
import BoardCommentItem from "../../src/components/units/15-board-comment-item";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage() {
    const {data} = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
        FETCH_BOARDS
    );

    return(
        <>
            {data?.fetchBoards?.map(el => {
                return <BoardCommentItem key={el.number} el={el}/>
            })}
        </>
    )
}