import BoardWrite from "../../../../../src/components/units/board/09-write2/BoardWrite.container"
import { useRouter } from "next/router";
import { useQuery, gql } from '@apollo/client';

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

export default function GraphqlMutationPage(){
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number : Number(router.query.number) }
    });

    return (
        <div>
            <div>============== 여기는 page 입니다. ================</div>
            <BoardWrite isEdit={true} data={data}/>
            <div>============== 여기는 apge 입니다. ================</div>
        </div>
    )
}
