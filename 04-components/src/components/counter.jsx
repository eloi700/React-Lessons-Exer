import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // eslint-disable-next-line no-undef
          onClick={() =>this.props.onIncrement(this.props.counter)}
          className='btn btn-warning btn-sm rounded-pill'
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm rounded-pill m-2'
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 p-2 bg-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
