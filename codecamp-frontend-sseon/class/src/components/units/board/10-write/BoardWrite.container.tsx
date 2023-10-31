import { useMutation } from "@apollo/client"
import { useState, ChangeEvent } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";           // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter";             // export default로 한개만 가져오기
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";
// import randomName from "./BoardWrite.presenter";            // export default로 이름 바꿔서 가져오기도 가능
// import randomName, { apple } from "./BoardWrite.presenter"; // export default와 export 함께 가져오기
// import * as S from './BoardWrite.styles'                    // export 한방에 다 가져오기
// S.BlueInput                                                 // export 한방에 다 가져오기
// S.RedInput                                                  // export 한방에 다 가져오기

export default function BoardWrite(props: IBoardWriteProps){
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [ mutationFunc ] = useMutation(CREATE_BOARD);
    const [ updateBoard ] = useMutation(UPDATE_BOARD);

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
        router.push(`/section10/10-02-typescript-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async () => {
        const myVariables: IMyVariables = { number : Number(router.query.number) }
        if(writer) myVariables.writer = writer;
        if(title) myVariables.title = title;
        if(contents) myVariables.contents = contents;

        const result = await updateBoard({
            variables: myVariables
        });
        console.log(result);
        router.push(`/section10/10-02-typescript-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value);
    }


    return (
        <div>
            <div>============== 여기는 컨테이너 입니다. ================</div>
            <BoardWriteUI 
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isEdit={props.isEdit}
                data={props.data} // 등록(undefined)이거나, 수정(data)
            />
            <div>============== 여기는 컨테이너 입니다. ================</div>
        </div>
    )
}