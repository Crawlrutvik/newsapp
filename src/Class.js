import React, { Component } from "react";

export default class Class extends Component {
  render() {
    if (this.props.imgame === "noimg") {
        console.log('this.props.imgame : ', this.props.imgame );
      throw new Error("img is not found thi compoet");
    }
    return (
      <>
        <img src={this.props.imgame} />

        <h1>hellow</h1>
      </>
    );
  }
}
