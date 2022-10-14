import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      // counters with properties of id and value
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  //passing ref to handleDelete fn using props into child component
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className='btn btn-warning btn-sm rounded-pill'
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
