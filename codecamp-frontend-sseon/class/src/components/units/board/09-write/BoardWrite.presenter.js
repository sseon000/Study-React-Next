import { RedInput, BlueInput, YelloButton } from "./BoardWrite.styles";

export default function BoardWriteUI(props){
    
    return (
        <div>
            <div>============== 여기는 프레젠터 입니다. ================</div> 
            <div>
                작성자 : <RedInput type="text" onChange={props.onChangeWriter} />
                제목 : <BlueInput type="text" onChange={props.onChangeTitle} />
                내용 : <RedInput type="text" onChange={props.onChangeContents} />
                <YelloButton onClick={props.idEdit ? props.onClickUpdate : props.onClickSubmit}>
                    {props.idEdit ? "수정" : "등록"}하기
                </YelloButton>
            </div>
            <div>============== 여기는 프레젠터 입니다. ================</div>    
        </div>
    )
}

export const apple = 3;