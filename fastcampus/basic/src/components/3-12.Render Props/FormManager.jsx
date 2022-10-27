import React, { Component } from "react";

export default class FormManager extends Component {
  static defaultProps = {
    form: {},
  };

  constructor(props) {
    super(props);
    this.state = props.defaultForm;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.props.form);
  };

  render() {
    return this.props.render({
      form: this.state,
      onSubmit: this.handleSubmit,
      onChange: this.handleChange,
    });
  }
}
