import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { IQuery, IQueryFetchBoardArgs } from '../../../src/commons/types/generated/types';

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
    console.log(router.query.qqq);

    // const { data } = useQuery(FETCH_BOARD);
    // useQuery 요청시 변수넣기 -> 2번째 인자에 객체 타입(type: object)
    // useQuery 대한 타입은 2번variables와 결과로 받아온 1번return 2개 타입 지정해야함
    // 함수형태에 타입을 지정할땐 <> 사용!!
    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: { number : Number(router.query.qqq) }
    });

    console.log(data);

    return (
        <div>
            <div>{router.query.qqq}번 게시글로 이동이 완료되었습니다.</div>
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