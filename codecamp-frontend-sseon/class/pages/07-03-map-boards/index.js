import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

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

const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 25%;
`

export default function StaticRoutedPage() {
    const {data} = useQuery(FETCH_BOARDS);

    // <div>13356번 게시글로 이동이 완료되었습니다.</div>
    // {/* 렌더링시 useQuery로 data를 받기전에 data가 undefined인 상태에서는 에러 -> data && 로 조건부렌더링 */}
    // <div> 작성자: {data && data.fetchBoards.writer}</div>
    // {/* 삼항연산자 사용 */}
    // <div> 제목: {data ? data.fetchBoards.title : "로딩중입니다.."}</div>
    // {/* 옵셔널 체이닝 */}
    // <div> 내용: {data?.fetchBoards.contents}</div>

    return(
        <>
            {data?.fetchBoards.map(el => {
                <Row>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.contents}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </Column>
                </Row>
            })}
        </>
    )
}