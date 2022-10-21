import React, { Component } from "react";

class ClassComponent extends Component {
  // state 초기화 및 메서드 바인딩
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log("constructor");
  }

  // Component가 Dom에 렌더링 된 이후 동작
  // Dom 노드 초기화 및 데이터 fetch
  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 5000);
  }

  // 최초 렌더링 때 호출 X
  // 갱신(업데이트)이 일어난 직후에 호출
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // 컴포넌트가 제거될 때 동작
  // ex.타이머 제거, 요청 취소, 구독 해제
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default ClassComponent;
