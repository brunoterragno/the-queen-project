import React from "react";
import AppButton from "./Button.js";
import Form from "./Form.js";

class Users extends React.Component {
  handleInputRef = input => {
    this.input = input;
  };

  getName(user) {
    return `${user.name} ${user.surname}`;
  }

  render() {
    return (
      <p>
        <Form
          onClick={(name, surname) =>
            this.props.adicionarUser(name, surname, this.props.type)
          }
        />
        <div className="App-list" data-testid="user-list" >
          {this.props.users.map(user => (
            <p className="App-list-item">
              {this.getName(user)}
              <AppButton
                text="Remover"
                onClick={() => this.props.removeUser(user, this.props.type)}
              />
            </p>
          ))}
        </div>
      </p>
    );
  }
}
export default Users;
