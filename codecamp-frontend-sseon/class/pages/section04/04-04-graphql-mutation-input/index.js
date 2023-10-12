import { useMutation, gql } from "@apollo/client"
import { useState } from "react";

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
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [ mutationFunc ] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        // mutation 함수 인자에 객체형태 { $: {} }추가, key $, value {}
        const result = await mutationFunc({
            // $: { $ = variables
            // $: { writer, title, contents }
            variables: {
                // writer: writer, => 객체의 key와 value가 같으면 생략가능 short hand properties
                writer,
                title,
                contents
            }
        });
        console.log(result);
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangeContents = (event) => {
        setContents(event.target.value);
    }

    // 한 줄일때는 괄호() 필요 없음
    return (
        <div>
            작성자 : <input type="text" onChange={onChangeWriter} />
            제목 : <input type="text" onChange={onChangeTitle} />
            내용 : <input type="text" onChange={onChangeContents} />
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </div>    
    )    
}
