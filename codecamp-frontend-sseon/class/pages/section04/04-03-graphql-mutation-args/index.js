import { useMutation, gql } from "@apollo/client"

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

    const onClickSubmit = async () => {
        // mutation 함수 인자에 객체형태 { $: {} }추가, key $, value {}
        const result = await mutationFunc({
            // $: { $ = variables
            variables: {
                writer: "훈이",
                title: "제목입니다",
                contents: "내용입니다"
            }
        });
        console.log(result);
    }

    // 한 줄일때는 괄호() 필요 없음
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}
