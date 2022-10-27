import React, { Component } from "react";

class FormTwo extends Component {
  //   state = {
  //     username: "",
  //     password: "",
  //   };

  //   handleChange = (e) => {
  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   handleSubmit = (e) => {
  //     e.preventDefault();

  //     this.setState({
  //       username: "",
  //       password: "",
  //     });
  //   };

  render() {
    // const { username, password } = this.state;
    const { username, password, onSubmit, onChange } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={username}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChange}
        />
        <button type="submit">OK</button>
      </form>
    );
  }
}

export default FormTwo;
