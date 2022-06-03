import React, { Component } from "react";

export default class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.handlclick = this.handlclick.bind(this);
    this.state = {
      counter: 0,
    };
  }
  shouldComponentUpdate() {
    return false;
  }
  handlclick() {
    this.setState({ counter: this.state.counter + 1 });
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.handlclick}>button</button>
      </div>
    );
  }
}
