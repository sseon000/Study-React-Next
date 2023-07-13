import { gql, useQuery } from "@apollo/client";

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
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            number: 13357
        }
    })

    console.log(data);

    return(
        <>
            <div>13357번 게시글로 이동이 완료되었습니다.</div>
            <div> 작성자: {data && data.fetchBoard.writer}</div>
            <div> 제목: {data && data.fetchBoard.title}</div>
            <div> 내용: {data && data.fetchBoard.contents}</div>
        </>
    )
}