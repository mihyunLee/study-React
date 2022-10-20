import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // 컴포넌트가 렌더링 될 때 호출된다.
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // 컴포넌트가 사라지기 전에 호출된다.
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClassComponent;
