export default function BoardComponent(props){
    return(
        <div>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            제목 : <input type="text" /><br />
            내용 : <input type="text" /><br />
            <button>{props.isEdit ? "수정" : "등록"}하기</button>        
        </div>
    )
}

/**
 * 등록 or 수정페이지 재사용!!!!!
 * 컴포넌트를 하나 만들고 import하는 페이지에서 props로 분기하기!!!
 */