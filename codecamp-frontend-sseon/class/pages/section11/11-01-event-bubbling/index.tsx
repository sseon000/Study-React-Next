import { useQuery, gql } from '@apollo/client';
import { MouseEvent } from 'react'

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

    const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
        alert(event.currentTarget.id);
        // currentTarget은 태그일 수밖에 없기 때문에 거기서는 ts적용에 if(event.target instanceof HTMLDivElement) 같은 불필요한 로직 필요없음!

    }

    // const qqq = () => {
    //     alert("클릭 타이틀")
    // }

    return (
        <div>
            {data?.fetchBoards.map((el: any) => (
                <div id={el.writer} onClick={onClickAlert}>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin : "10px" }} >{el.number}</span>
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