import { Component } from 'react';
import { Form } from './Form';

export class App extends Component {
  state = {
    // todos: initialTodos,
  };

  formSubmitHandler = data => {
    console.log(data)
   };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#12b4ca',
        }}
      >
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInput}
        /> */}
        <Form onSubmit={ this.formSubmitHandler} />
      </div>
    );
  }
}
