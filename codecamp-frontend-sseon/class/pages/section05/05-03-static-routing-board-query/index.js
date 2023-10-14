import { useRouter } from 'next/router';

export default function StaticRoutingPage(){
    const router = useRouter();

    const onClickMove1 = () => {
        router.push(`/section05/05-03-static-routing-board-query-moved/18471`);
    }

    const onClickMove2 = () => {
        router.push(`/section05/05-03-static-routing-board-query-moved/18472`);
    }

    const onClickMove3 = () => {
        router.push(`/section05/05-03-static-routing-board-query-moved/18473`);
    }

    return (
        <>
            <button onClick={onClickMove1}>18471번 게시글로 이동하기!!!</button>
            <button onClick={onClickMove2}>18472번 게시글로 이동하기!!!</button>
            <button onClick={onClickMove3}>18473번 게시글로 이동하기!!!</button>
        </>
    )
}