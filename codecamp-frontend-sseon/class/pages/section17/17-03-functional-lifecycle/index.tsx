// react에서 Component를 불러오고
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// 해당 클래스에서 Component를 상속받음
export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // componenetDidMount 와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []); // 의존성배열(dependeny array)

  // componenetDidMount + componentDidUpdate 와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행!!");
  });

  useEffect(() => {
    // componentWillUnmount 와 동일
    return () => {
      console.log("사라지기 전에 실행!!");
    };
  }, []);

  // 1. useEffect 하나로 합치기
  // useEffect(() => {
  //   console.log("그려지고 나서 실행");

  //   return () => {
  //     console.log("사라지기 전에 실행!!");
  //   };
  // }, [count]);

  // 2. useEffect의 잘못된 사용법(1. 추가렌더링, 무한루프)
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      <button onClick={onClickMove}>나가기!!</button>
    </>
  );
}
