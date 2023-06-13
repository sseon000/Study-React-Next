export default function BoardWriteUI(props) {
    // 자바스크립트 영역

    // HTML 영역
    return (
        <>
            작성자: <input type="text" onChange={props.bbb}/> <br />
            제목: <input type="text" onChange={props.ccc}/> <br />
            내용: <input type="text" onChange={props.ddd}/> <br />
            <button onClick={props.aaa}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )

}