import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }

  formatCount() {
    const count = this.state.count;
    return count === 0 ? <span>Zero</span> : count;
  }
}

export default Counter;
