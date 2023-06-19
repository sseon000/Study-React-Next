import { useMutation } from "@apollo/client"
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
    const router = useRouter();
    const [ myColor, setMyColor ] = useState(false);

    // 자바스크립트 영역
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [ 나의함수 ] = useMutation(CREATE_BOARD);
    const [ updateBoard ] = useMutation(UPDATE_BOARD);

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
        router.push(`/08-05-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async () => {
        // 1. 수정하기 뮤테이션 날리기
        const result = await updateBoard({
            variables: {
                number: Number(router.query.number),
                writer,
                title,
                contents: content,
            }
        })
        // 2. 수정하고 상세페이지로 이동하기
        console.log(result);
        alert(result.data.updateBoard.message);
        router.push(`/08-05-boards/${result.data.updateBoard.number}`)
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
            onClickUpdate={onClickUpdate}
            onClickSubmit={onClickSubmit}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContent={onChangeContent}
            myColor={myColor}
            isEdit={props.isEdit}
        />
    )
}