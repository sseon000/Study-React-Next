import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingPaMovedge(){
    const router = useRouter();
    console.log(router.query.number);

    // const { data } = useQuery(FETCH_BOARD);
    // useQuery 요청시 변수넣기 -> 2번째 인자에 객체 타입(type: object)
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number : Number(router.query.number) }
    });

    console.log(data);

    const onClickMove = () => {
        router.push(`/section09/09-04-boards/${router.query.number}/edit`)
    }

    return (
        <div>
            <div>{router.query.number}번 게시글로 이동이 완료되었습니다.</div>
            <div>작성자 : {data && data.fetchBoard?.writer}</div> 
            <div>제목 : {data?.fetchBoard?.title}</div>
            <div> 내용 : {data ? data.fetchBoard?.contents : "로딩중입니다!!"}</div>
            <button onClick={onClickMove}>수정하러가기</button>
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