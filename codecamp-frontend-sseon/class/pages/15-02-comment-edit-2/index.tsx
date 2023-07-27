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
    const [myIdx, setMyIdx] = useState([
        false, // idx 0
        false, // idx 1
        false, // idx 2
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const {data} = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
        FETCH_BOARDS
    );

    const onClickEdit = (event: React.MouseEvent<HTMLButtonElement>) => {

        // const qqq = myIdx 참조객체는 깊은 복사 해야함
        const qqq = [...myIdx]
        qqq[Number(event.currentTarget.id)] = true;
        setMyIdx(qqq);
    }

    return(
        <>
            {data?.fetchBoards?.map((el, idx) => {
               return <div key={el.number}>
                        {!myIdx[idx] && (
                            <div>
                                <span style={{margin: '10px'}}>{el.writer}</span>
                                <span style={{margin: '10px'}}>{el.title}</span>
                                <button id={String(idx)} onClick={onClickEdit}>수정하기</button>
                            </div>
                        )}
                        {myIdx[idx] && (
                            <div>
                                수정할 내용: <input type="text" />
                            </div>
                        )} 
                       </div>
            })}
        </>
    )
}