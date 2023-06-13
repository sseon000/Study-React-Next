import { gql, useMutation } from "@apollo/client"
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter"

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) { # 타입 적는 곳
        createBoard(writer: $writer, title: $title,contents: $contents) {      # 실제 우리가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`

export default function BoardWrite() {
    // 자바스크립트 영역
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [ 나의함수 ] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        // const writer = "qqq" // 스코프 체인
        const result = await 나의함수({
            variables: {    // variables가 $역할을 해줌 : $writer -> writer
                writer: writer,
                title: title,
                contents: content
            }
        });
        console.log(result);
        alert(result.data.createBoard.message);
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangeContent = (event) => {
        setContent(event.target.value);
    }

    // HTML 영역
    return (
        <BoardWriteUI 
            aaa={onClickSubmit}
            bbb={onChangeWriter}
            ccc={onChangeTitle}
            ddd={onChangeContent}
        />
    )
}