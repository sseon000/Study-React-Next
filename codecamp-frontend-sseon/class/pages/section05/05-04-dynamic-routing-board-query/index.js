import { useRouter } from 'next/router';

export default function StaticRoutingPage(){
    const router = useRouter();

    const onClickMove = () => {
        router.push(`/section05/05-04-dynamic-routing-board-query-moved/${number}`);
    }

    return (
        <>
            <button onClick={onClickMove}>게시글로 이동하기!!!</button>
        </>
    )
}