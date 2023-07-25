
interface IChild2Props {
    count: number
    onClickCountUp: () => void
}
export default function Child2(props: IChild2Props){
    return (
        <>
            <div>자식2의 카운트: {props.count}</div>
            <button onClick={props.onClickCountUp}>카운트 올리기</button>
        </>
    )
}