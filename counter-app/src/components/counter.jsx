import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };


  handleIncrement = product => {
    console.log(product);
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className='btn btn-secondary btn-sm rounded-pill'
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 p-2 bg-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // return this.state.count === 0 ? 'Zero': this.state.count; - OR
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
