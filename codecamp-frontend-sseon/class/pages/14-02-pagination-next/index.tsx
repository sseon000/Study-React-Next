import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "../../src/commons/types/generated/types";
import { useState } from 'react';

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
    const [startPage,setStartPage] = useState(1);

    // useQuery< , > : , 왼쪽은 데이터 타입 오른쪽이 인자(variables) 타입
    const {data, refetch} = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
        FETCH_BOARDS
    );
    // console.log(data?.fetchBoards);

    const onClickPage = (event: React.MouseEvent<HTMLSpanElement>) => {
        // console.log(event.currentTarget.id);
        void refetch({ page: Number(event.currentTarget.id)})
    }

    const onClickPrevPage = () => {
        setStartPage(startPage - 10);
        void refetch({page: startPage - 10})
    }

    const onClickNextPage = () => {
        setStartPage(startPage + 10);
        void refetch({page: startPage + 10})
    }

    return(
        <>
            {data?.fetchBoards?.map(el => {
               return <div key={el.number}>
                         <span style={{margin: '10px'}}>{el.writer}</span>
                         <span style={{margin: '10px'}}>{el.title}</span>
                       </div>
            })}
           
            <span onClick={onClickPrevPage}>이전페이지</span>
            {
                 Array(10).fill(1).map((_,idx) => {
                    return <span key={idx+startPage} id={String(idx+startPage)} onClick={onClickPage}> {idx+startPage} </span>
                })
            }
            <span onClick={onClickNextPage}>다음페이지</span>

            {/* {
                [1,2,3,4,5,6,7,8,9,10].map(el => {
                    return <span key={el} id={String(el)} onClick={onClickPage}> {el} </span>
                })
            } */}
            
            {/* <span id='1' onClick={onClickPage}> 1 </span>
            <span id='2' onClick={onClickPage}> 2 </span>
            <span id='3' onClick={onClickPage}> 3 </span> */}
        </>
    )
}