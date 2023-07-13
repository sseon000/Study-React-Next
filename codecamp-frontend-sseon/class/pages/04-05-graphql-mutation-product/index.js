import { gql, useMutation } from "@apollo/client"
import { useState } from "react";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) { # 타입 적는 곳
        createProduct(seller: $seller, createProductInput: $createProductInput) {       # 실제 우리가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {
    // const [writer, setWriter] = useState("");
    // const [title, setTitle] = useState("");
    const [ 나의함수 ] = useMutation(CREATE_PRODUCT);

    const onClickSubmit = async () => {
        // const writer = "qqq" // 이 함수에 있으면 현재 스코프(블록 스코프)
        const result = await 나의함수({
            variables: {    // variables가 $역할을 해줌 : $writer -> writer
                seller: "훈이", // 이 함수에 없으면 스코프 체인을 통해서 상위 함수에서 찾음
                createProductInput: {
                    name: "마우스",
                    detail: "정말 좋은 마우스",
                    price: 3000
                }
            }
        });
        console.log(result);
        alert(result.data.createProduct.message);
    }

    // const onChangeWriter = (event) => {
    //     setWriter(event.target.value);
    // }

    // const onChangeTitle = (event) => {
    //     setTitle(event.target.value);
    // }

    return (
        <>
            {/* 작성자: <input type="text" onChange={onChangeWriter}/> <br />
            제목: <input type="text" onChange={onChangeTitle}/> <br /> */}
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )

}