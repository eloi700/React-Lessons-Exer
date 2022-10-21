import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-1'>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className='col'>
          <button
            // eslint-disable-next-line no-undef
            onClick={() => this.props.onIncrement(this.props.counter)}
            className='btn btn-warning btn-sm'
          >
            +
          </button>
          <button
            // eslint-disable-next-line no-undef
            onClick={() => this.props.onDecrement(this.props.counter)}
            className='btn btn-warning btn-sm m-2'
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className='btn btn-danger btn-sm rounded-pill'
          >
            Delete
          </button>
        </div>
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
