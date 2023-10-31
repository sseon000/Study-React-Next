
import { RedInput, BlueInput, YelloButton } from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";


export default function BoardWriteUI(props: IBoardWriteUIProps){
    
    return (
        <div>
            <div>============== 여기는 프레젠터 입니다. ================</div> 
            <div>
                작성자 : <RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data ? props.data.writer : ""}/>
                제목 : <BlueInput type="text" onChange={props.onChangeTitle} defaultValue={props.data?.title}/>
                내용 : <RedInput type="text" onChange={props.onChangeContents} defaultValue={props.data?.contents}/>
                <YelloButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
                    {props.isEdit ? "수정" : "등록"}하기
                </YelloButton>
            </div>
            <div>============== 여기는 프레젠터 입니다. ================</div>    
        </div>
    )
}

export const apple = 3;