import {Component} from "react";

export default class ClassCounterPage extends Component{
    state = {
        count: 0
    }

    // 빙법1)화살표 함수로 변경하기
    onClickCountUp = () => {
        console.log(this.state.count)
        this.setState({
            count: 1,
        });
    };

    render() {
        return (
            <>
                <div>{this.state.count}</div>
                {/* .bind(this) */}
                {/* <button onClick={this.onClickCountUp}>카운트 올리기</button> */}
                <button onClick={this.onClickCountUp}>카운트 올리기</button>
            </>
        )
    }

}