import { Component } from 'react';
const shortid = require('shortid');

export class Form extends Component {
  state = {
    name: '',
    surname: '',
    age: 'young',
    agree: false,
  };

  nameInputId = shortid.generate();
  surnameInputId = shortid.generate();

  // input
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  // submit
  handleSubmit = event => {
    event.preventDefault(); //щоб сторінка не перезагружалась пред сабмітом
    this.props.onSubmit(this.state); //передача даних в App
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', surname: '' });
  };

  handleAgree = event => {
    console.log(event.currentTarget.checked);
    this.setState({ agree: event.currentTarget.checked });
  };

  render() {
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={this.handleSubmit}
      >
        <label htmlFor={this.nameInputId}>
          Name{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.surnameInputId}>
          Surname{' '}
          <input
            type="text"
            name="surname"
            value={this.state.surname}
            onChange={this.handleChange}
            id={this.surnameInputId}
          />
        </label>

        {/* РАДІО КНОПКИ */}
        <p>Ваш вік ?</p>
        <label htmlFor="">
          <input
            type="radio"
            name="age"
            value="young"
            onChange={this.handleChange}
            checked={this.state.age === 'young'}
          />
          Мале
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="age"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.age === 'middle'}
          />
          Дурне
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="age"
            value="eldery"
            onChange={this.handleChange}
            checked={this.state.age === 'eldery'}
          />
          Старе
        </label>

        {/* ЧЕКБОКС */}
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={this.state.agree}
            onChange={this.handleAgree}
          />
          Погоджуюсь
        </label>

        <button type="submit" disabled={!this.state.agree}>
          Авторизація
        </button>
      </form>
    );
  }
}
