import { useMutation, gql } from "@apollo/client"
import { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types";

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
    // const [ counter, setCounter ] = useState<number>(0)

    //const [ mutationFunc ] = useMutation<결과타입, 변수타입>(CREATE_BOARD);
    const [ mutationFunc ] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);

    const onClickSubmit = async () => {
        // mutation 함수 인자에 객체형태 { $: {} }추가, key $, value {}
        // mutation에 대한 타입은 2번variables와 결과로 받아온 1번return 2개 타입 지정해야함
        // 함수형태에 타입을 지정할땐 <> 사용!!
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
