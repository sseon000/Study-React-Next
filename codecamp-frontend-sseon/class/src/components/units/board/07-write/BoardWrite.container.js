import { useMutation } from "@apollo/client"
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
    const [ myColor, setMyColor ] = useState(false);

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
        if(event.target.value && title && content) {
            setMyColor(true);
        } else {
            setMyColor(false);
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
        if(writer && event.target.value && content) {
            setMyColor(true);
        } else {
            setMyColor(false);
        }
    }

    const onChangeContent = (event) => {
        setContent(event.target.value);
        if(writer && title && event.target.value) {
            setMyColor(true);
        } else {
            setMyColor(false);
        }
    }
    
    // HTML 영역
    return (
        <BoardWriteUI 
            onClickSubmit={onClickSubmit}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContent={onChangeContent}
            myColor={myColor}
        />
    )
}