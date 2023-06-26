import { useMutation } from "@apollo/client"
import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyvariables } from "./BoardWrite.types";


export default function BoardWrite(props: IBoardWriteProps) {
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
        router.push(`/10-01-typescript-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async () => {
        
        // 수정한 데이터만 뮤테이션 날리기
        const myvariables: IMyvariables = {
            number: Number(router.query.number)
        }
        if(writer) myvariables.writer = writer
        if(title) myvariables.title = title
        if(content) myvariables.contents = content

        // 1. 수정하기 뮤테이션 날리기
        const result = await updateBoard({
            variables: myvariables
        })
        
        // 2. 수정하고 상세페이지로 이동하기
        console.log(result);
        alert(result.data.updateBoard.message);
        router.push(`/10-01-typescript-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
        if(event.target.value && title && content) {
            setMyColor(true);
        } else {
            setMyColor(false);
        }
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
        if(writer && event.target.value && content) {
            setMyColor(true);
        } else {
            setMyColor(false);
        }
    }

    const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
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
            data={props.data}
        />
    )
}