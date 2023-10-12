import { useMutation, gql } from "@apollo/client"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){ # 변수의 타입 적는 곳
        createProduct(seller: $seller, createProductInput: $createProductInput){       # 실제 우리가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(){
    const [ createProduct ] = useMutation(CREATE_PRODUCT);

    const onClickSubmit = async () => {
        // mutation 함수 인자에 객체형태 { $: {} }추가, key $, value {}
        const result = await createProduct({
            // $: { $ = variables
            variables: {
                seller: "훈이",
                createProductInput: {
                    name: "마우스",
                    detail: "로지텍 마우스",
                    price: 3000
                }
            }
        });
        console.log(result);
    }

    // 한 줄일때는 괄호() 필요 없음
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}

/* 네트워크(API) 요청시 요청이 2개가 나간 이유 
type이 preflight인것은 타겟에 어떤 요청이 가능한지 물어보는 거
답변으로 http method(GET,POST 등등이 옴)
*/