import { useMutation, gql } from "@apollo/client"
import { useRouter } from 'next/router'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(){
    const [ mutationFunc ] = useMutation(CREATE_BOARD);
    const router = useRouter();
    
    const onClickSubmit = async () => {
        try { // try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 모두 무시하고, catch에 있는 내용이 실행됨.
            const result = await mutationFunc({ // mutation 함수 인자에 객체형태 { $: {} }추가, key $, value {}
                variables: { // $: { $ = variables
                    writer: "훈이",
                    title: "제목입니다",
                    contents: "내용입니다"
                }
            });
            console.log(result);
            console.log(result.data.createBoard.number);
            router.push(`/section05/05-05-dynamic-routing-board-query-moved/${result?.data?.createBoard?.number}`)
        } catch(error) {
            alert(error.message)    
        }
        
    }

    // 한 줄일때는 괄호() 필요 없음
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}
