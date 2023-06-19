import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){   # 타입 적는 곳
        fetchBoard(number: $number) { # 실제 우리가 전달할 변수 적는 곳
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage() {
    const router = useRouter();
    
    console.log(router.query.number);

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            // number: 13356
            number: Number(router.query.number)
        }
    })

    console.log(data);

    const onClickMoveToEdit = () => {
        router.push(`/08-05-boards/${router.query.number}/edit`)
    }

    return(
        <>
            <div>{router.query.number}번 게시글로 이동이 완료되었습니다.</div>
            {/* 렌더링시 useQuery로 data를 받기전에 data가 undefined인 상태에서는 에러 -> data && 로 조건부렌더링 */}
            <div> 작성자: {data && data.fetchBoard.writer}</div>
            {/* 삼항연산자 사용 */}
            <div> 제목: {data ? data.fetchBoard.title : "로딩중입니다.."}</div>
            {/* 옵셔널 체이닝 */}
            <div> 내용: {data?.fetchBoard.contents}</div>
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
        </>
    )
}