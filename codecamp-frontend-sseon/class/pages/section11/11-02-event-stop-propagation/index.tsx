import { useQuery, gql } from '@apollo/client';
import { MouseEvent } from 'react'
import CheckBox from './checkbox';

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingPaMovedge(){
    const { data } = useQuery(FETCH_BOARDS);

    console.log(data?.fetchBoards);

    const qqq1 = () => {
        alert("클릭 1")
    }

    const qqq4 = (event: MouseEvent) => {
        event.stopPropagation();
        alert("클릭 4")
    }

    return (
        <div>
            {data?.fetchBoards.map((el: any) => (
                <div id={el.writer} onClick={qqq1}>
                    <CheckBox />
                    <span style={{ margin : "10px" }} onClick={qqq4}>{el.number}</span>
                    <span style={{ margin : "10px" }} >{el.title}</span>
                    <span style={{ margin : "10px" }} >{el.writer}</span>
                </div>
            ))}
        </div>
    )
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