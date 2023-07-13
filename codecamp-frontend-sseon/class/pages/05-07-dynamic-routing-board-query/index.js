import { useRouter } from "next/router"

export default function StaticRoutingPage() {
    const router = useRouter();

    const onClickMove1 = () => {
        // 05-08-dynamic-routed-board-query/[variable] -> [variable]에 13356변수 매핑
        router.push("/05-08-dynamic-routed-board-query/13356");
    }

    const onClickMove2 = () => {
        router.push("/05-08-dynamic-routed-board-query/13357");
    }

    const onClickMove3 = () => {
        router.push("/05-08-dynamic-routed-board-query/13358");
    }

    return (
        <>
            <button onClick={onClickMove1}>1번 게시글로 이동하기!!!</button><br />
            <button onClick={onClickMove2}>2번 게시글로 이동하기!!!</button><br />
            <button onClick={onClickMove3}>3번 게시글로 이동하기!!!</button><br />
        </>
    )
}