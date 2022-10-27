import React, { Component } from "react";

class FormOne extends Component {
  //   state = {
  //     name: "",
  //     phone: "",
  //   };

  //   handleChange = (e) => {
  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   handleSubmit = (e) => {
  //     e.preventDefault();

  //     this.setState({
  //       name: "",
  //       phone: "",
  //     });
  //   };

  render() {
    // const { name, phone } = this.state;
    const { name, phone, onSubmit, onChange } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="이름"
          value={name}
          onChange={onChange}
        />
        <input
          name="phone"
          placeholder="전화번호"
          value={phone}
          onChange={onChange}
        />
        <button type="submit">OK</button>
      </form>
    );
  }
}

export default FormOne;
