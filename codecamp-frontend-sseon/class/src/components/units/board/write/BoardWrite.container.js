import { useMutation } from "@apollo/client"
import { useState } from "react";
import { CREATE_BOARD } from "./BoardWrite.queries";           // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter";             // export default로 한개만 가져오기
// import randomName from "./BoardWrite.presenter";            // export default로 이름 바꿔서 가져오기도 가능
// import randomName, { apple } from "./BoardWrite.presenter"; // export default와 export 함께 가져오기
// import * as S from './BoardWrite.styles'                    // export 한방에 다 가져오기
// S.BlueInput                                                 // export 한방에 다 가져오기
// S.RedInput                                                  // export 한방에 다 가져오기

export default function BoardWrite(){
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


    return (
        <div>
            <div>============== 여기는 컨테이너 입니다. ================</div>
            <BoardWriteUI 
                onClickSubmit={onClickSubmit}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
            />
            <div>============== 여기는 컨테이너 입니다. ================</div>
        </div>
    )
}