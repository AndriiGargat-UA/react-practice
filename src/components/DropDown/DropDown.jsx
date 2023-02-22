import { Component } from 'react';
import { DropDownContainer, DropDownMenu } from './DropDown.styled';

export class DropDown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }))
  }

  render() {
    return (
      <DropDownContainer>
        <button
          type="button"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Сховати' : 'Показати'}
        </button>

        {this.state.visible && <DropDownMenu>Випадаюче меню</DropDownMenu>}
      </DropDownContainer>
    );
  }
}
