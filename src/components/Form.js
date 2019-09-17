import React from "react";
import AppButton from "./Button";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: ""
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSurnameChange = event => {
    this.setState({ surname: event.target.value });
  };

  render() {
    return (
      <div>
        Name:
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        Surname:
        <input
          type="text"
          value={this.state.surname}
          onChange={this.handleSurnameChange}
        />
        <AppButton
          text="Adicionar"
          onClick={() =>
            this.props.onClick(this.state.name, this.state.surname)
          }
        />
      </div>
    );
  }
}
export default Form;
