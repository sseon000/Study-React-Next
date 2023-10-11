import { useMutation, gql } from "@apollo/client"

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer: "철수", title: "안녕하세요", contents: "반갑습니다"){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(){
    const [ mutationFunc ] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await mutationFunc();
        console.log(result);
    }

    // 한 줄일때는 괄호() 필요 없음
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}

/* 네트워크(API) 요청시 요청이 2개가 나간 이유 
type이 preflight인것은 타겟에 어떤 요청이 가능한지 물어보는 거
답변으로 http method(GET,POST 등등이 옴)
*/