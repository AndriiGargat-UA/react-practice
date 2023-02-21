import { Component } from 'react';
import PropTypes from 'prop-types';
import { Controls } from './Controls';

export class Counter extends Component {
  // constructor() {  // OLD school
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  // }
  // ===================================
  static defaultProps = {
    initialValue: 0,
  }; // дефолтні пропси

  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };

  state = {
    value: this.props.initialValue, //приходить з App
  };

  increment = () => {
    //публічна властивість класу
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
    console.log('+');
  };

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
    console.log('-');
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.increment}>
            Збільшити на 1
          </button>
          <button type="button" onClick={this.decrement}>
            Зменшити на 1
          </button>
        </div> */}
        <Controls
          onIncrement={this.increment}
          onDecrement={this.decrement}
        />
      </div>
    );
  }
}
