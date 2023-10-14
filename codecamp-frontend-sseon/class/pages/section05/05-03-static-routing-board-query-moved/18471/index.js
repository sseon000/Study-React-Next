import { useQuery, gql } from '@apollo/client';

const FETCH_BOARD = gql`
    query{
        fetchBoard(number: 18471){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingPaMovedge(){
    const { data } = useQuery(FETCH_BOARD);

    console.log(data);

    return (
        <div>
            <div>18471번 게시글로 이동이 완료되었습니다.</div>
            {/* 조건부 연산자 */}
            <div>작성자 : {data && data.fetchBoard?.writer}</div> 
            {/* 옵셔널체이닝 */}
            <div>제목 : {data?.fetchBoard?.title}</div>
            {/* 삼항연산자 */}
            <div> 내용 : {data ? data.fetchBoard?.contents : "로딩중입니다!!"}</div>
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