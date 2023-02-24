import { Component } from 'react';


export class App extends Component {
  state = {
    inputValue: '',
    name: '',
    surname: ''
  };

  handleChange = event => { 
    const { name, value } = event.currentTarget;
    this.setState({[name]: value})
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
          color: '#690808',
        }}
      >
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInput}
        /> */}

        <form style={{         
          display: 'flex',
          flexDirection: 'column',
        }}>
          <label htmlFor="">
            Name <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            Surname <input
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </label>
        </form>

      </div>
    );
  }
}
