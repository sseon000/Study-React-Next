import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "../../src/commons/types/generated/types";
import { useState } from "react";

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
    const [myIdx, setMyIdx] = useState(5);

    const {data} = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
        FETCH_BOARDS
    );

    const onClickEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMyIdx(Number(event.currentTarget.id));
    }

    return(
        <>
            {data?.fetchBoards?.map((el, idx) => {
               return <div key={el.number}>
                        {idx !== myIdx && (
                            <div>
                                <span style={{margin: '10px'}}>{el.writer}</span>
                                <span style={{margin: '10px'}}>{el.title}</span>
                                <button id={String(idx)} onClick={onClickEdit}>수정하기</button>
                            </div>
                        )}
                        {idx === myIdx && (
                            <div>
                                수정할 내용: <input type="text" />
                            </div>
                        )} 
                       </div>
            })}
        </>
    )
}