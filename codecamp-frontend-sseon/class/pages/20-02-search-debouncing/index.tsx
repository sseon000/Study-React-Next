import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "../../src/commons/types/generated/types";
import { useState } from 'react'
import _ from 'lodash';

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int, $search: String) {
        fetchBoards(page: $page, search: $search) {
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage() {
    // const [search, setSearch] = useState("");

    // useQuery< , > : , 왼쪽은 데이터 타입 오른쪽이 인자(variables) 타입
    const {data, refetch} = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
        FETCH_BOARDS
    );

    const onClickPage = (event: React.MouseEvent<HTMLSpanElement>) => {
        //console.log(event.currentTarget.id);
        void refetch({ page: Number(event.currentTarget.id)}) // 검색에서 refetch할 때, 사용한 search 검색어가 저장되어있는 상태이므로 추가로 search 포함하지 않아도 됨
    }

    // const onClickSearch = () => {
    //     // 검색어를 포함한 내용으로 refetch!
    //     void refetch({ search, page: 1 })
    // }

    const getDebounce = _.debounce((value) => {
        void refetch({ search: value, page: 1 })
    }, 500)

    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setSearch(event.target.value);
        // void refetch({ search: event.target.value, page: 1 })
        getDebounce(event.target.value)
    }

    return(
        <>
            <input type="text" onChange={onChangeSearch} />
            {/* <button onClick={onClickSearch}>검색하기</button> */}
            {data?.fetchBoards?.map(el => {
               return <div key={el.number}>
                         <span style={{margin: '10px'}}>{el.writer}</span>
                         <span style={{margin: '10px'}}>{el.title}</span>
                       </div>
            })}
           
            {Array(10).fill(1).map((_,idx) => {
                return <span key={idx+1} id={String(idx+1)} onClick={onClickPage}> {idx+1} </span>
            })}
        </>
    )
}