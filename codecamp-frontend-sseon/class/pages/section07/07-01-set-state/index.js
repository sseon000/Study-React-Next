import BoardWrite from "../../../src/components/units/board/07-write/BoardWrite.container"
export default function GraphqlMutationPage(){
    // 한 줄일때는 괄호() 필요 없음
    return (
        <div>
            <div>============== 여기는 page 입니다. ================</div>
            <BoardWrite qqq="철수"/>
            <div>============== 여기는 apge 입니다. ================</div>
        </div>
    )
}
