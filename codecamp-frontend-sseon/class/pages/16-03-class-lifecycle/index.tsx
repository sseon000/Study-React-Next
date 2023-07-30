import {Component} from "react";
import Router from 'next/router';

export default class ClassCounterPage extends Component{ // 컴포넌트 내장 state, componentDidMount, componentDidUpdate, componentWillUnmount, render 등...
    state = {
        count: 0
    }

    componentDidMount() { // 컴포넌트 실행시
        console.log('그려지고 나서 실행');
    }

    componentDidUpdate() { // 컴포넌트 리렌더링
        console.log('변경되고 나서 실행');
    }

    componentWillUnmount() { // 컴포넌트가 사라지기 직전
        console.log('사라질때 실행');
        // ex) 채팅방 나가기 api
    }

    // 빙법1)화살표 함수로 변경하기
    onClickCountUp = () => {
        console.log(this.state.count)
        this.setState((prev: {count: number}) => ({
            count: prev.count + 1,
        }));
    };

    onClickMove() {
        void Router.push("/");
    }

    render() {
        return (
            <>
                <div>{this.state.count}</div>
                {/* .bind(this) */}
                {/* <button onClick={this.onClickCountUp}>카운트 올리기</button> */}
                <button onClick={this.onClickCountUp}>카운트 올리기</button>
                <button onClick={this.onClickMove}>나가기!!</button>
            </>
        )
    }

}