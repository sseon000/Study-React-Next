import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifting-state-up/Child1";
import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";

export default function CounterLetDocumentPage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCount = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      {/* setCount를 전달하는 방법 1. setCount를 자체를 전달 */}
      <Child1 count={count} setCount={setCount} />
      <div>===================================</div>
      {/* setCount를 전달하는 방법 2. setCount를 사용하는 함수를 만들어서전달 */}
      <Child2 count={count} onClickCount={onClickCount} />
    </>
  );
}
