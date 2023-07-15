interface IProps {
    children: JSX.Element
}
export default function Layout(props: IProps) {
    return (
        <>
            <div>여기는 헤더입니다</div>
            <div>여기는 배너입니다</div>
            <div>여기는 메뉴입니다</div>
            <div>{props.children}</div>
            <div>여기는 푸터입니다</div>
        </>
    )
}