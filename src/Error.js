import React, { Component } from "react";

export default class Error extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    console.log("Error: ----", error);
    return { hasError: true };
  }

  componentDidCatch(error,info){
    console.log('error: ', error);
    console.log('info: ', info);

  }
  render() {
    if (this.state.hasError) {
      return <h3>Error : Image is not found this is error componet</h3>;
    }
    console.log('this.props.children: ', this.props.children);
    return this.props.children;
  }
}
