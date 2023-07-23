import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { IQuery, IQueryFetchBoardsArgs } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage() {
    // useQuery< , > : , 왼쪽은 데이터 타입 오른쪽이 인자(variables) 타입
    const {data} = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
        FETCH_BOARDS
    );

    console.log(data?.fetchBoards);

    const onClickPage = (event) => {
        console.log(event.target.id);
    }

    return(
        <>
            {data?.fetchBoards?.map(el => {
                <div key={el.number}>
                    <div>{el.writer}</div>
                    <div>{el.title}</div>
                </div>
            })}
            
            <span id='1' onClick={onClickPage}> 1 </span>
            <span id='2' onClick={onClickPage}> 2 </span>
            <span id='3' onClick={onClickPage}> 3 </span>
        </>
    )
}