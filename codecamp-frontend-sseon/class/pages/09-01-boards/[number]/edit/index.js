import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){   # 타입 적는 곳
        fetchBoard(number: $number) { # 실제 우리가 전달할 변수 적는 곳
            writer
            title
            contents
        }
    }
`

export default function GraphqlMutationPage() {
    const router = useRouter();

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            // number: 13356
            number: Number(router.query.number)
        }
    })

    return <BoardWrite isEdit={true} data={data}/>
}