import * as S from "./BoardWrite.styles";

// 아래는 export default와 export를 함께 사용하는 방법
// import qqq, { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
    // 자바스크립트 영역

    // HTML 영역
    return (
        <>
            작성자: <S.RedInput type="text" onChange={props.onChangeWriter}/> <br />
            제목: <input type="text" onChange={props.onChangeTitle}/> <br />
            내용: <input type="text" onChange={props.onChangeContent}/> <br />
            <S.BlueButton 
                onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
                myColor={props.myColor}    
            >
                {props.isEdit ? "수정하기" : "등록하기"}
            </S.BlueButton>
        </>
    )

}