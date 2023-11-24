// react에서 Component를 불러오고
import { Component } from "react";

// 해당 클래스에서 Component를 상속받음
export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  // 렌더 함수 필수
  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>
      </>
    );
  }
}
