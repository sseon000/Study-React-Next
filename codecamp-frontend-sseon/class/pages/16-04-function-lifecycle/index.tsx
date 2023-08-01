import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ClassCounterPage() {
    const [count, setCount] = useState(0);
    const router = useRouter();

    useEffect(() => { // 처음에 한 번 실행
        console.log('그려지고 나서 실행!!')
    },[]); // useEffect 2번째 인자 = 의존성 배열 -> 의존성 배열에 아무 조건도 없기 때문에 다시 실행되지 않음

    useEffect(() => { // 처음에도 실행 + 변경되고 실행 = didmount + didupdate
        console.log('변경되고 나서 실행!!')
    }); 

    useEffect(() => { 
        return () => {
            console.log('사라질때 실행!!')
        }
    }, []); 

    // 1. 하나로 합치기 가능
    // useEffect(() => { 
    //     console.log('그려지고 나서 실행!!')
    //     return () => {
    //         console.log('사라질때 실행!!')
    //     }
    // }, []);

    // useEffect(() => {
    //     console.log('변경되고 나서 실행!!')
    // }); 

    // 2. useEffect의 잘못된 사용 예제 : useEffect 내에서 setState시 2번 렌더링 발생 -> 어쩔수없는 경우에 효율적인 경우도 있음
    // (1. 추가 렌더링, 2. 무한루프)
    // useEffect(()=> {
    //     setCount((prev) => prev+1);
    // }, []) -> 의존성 배열을 인자로 추가하지 않거나, state변수를 배열에 추가할 경우 무한루프

    const onClickCountUp = () => {
        console.log(count);
        setCount((prev) => prev + 1);
    };

    const onClickMove = () => {
        void router.push("/");
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기</button>
            <button onClick={onClickMove}>나가기!!</button>
        </>
    )
}