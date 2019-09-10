import React from "react";
import AppButton from "./Button.js";
import Form from "./Form.js";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: "Paty", surname: "Garcia" },
        { name: "Andy", surname: "Garcia" },
        { name: "Don", surname: "Garcia" }
      ]
    };
  }
  getName(user) {
    return `${user.name} ${user.surname}`;
  }
 
  removeUser(removedUser) {
    this.setState({
      ...this.state,
      users: this.state.users.filter(user => user !== removedUser)
    });
  }
  adicionarUser(name, surname){
    this.setState({
      ...this.state,
      users: [...this.state.users,
        {name: name, surname}
      ]
    })
  }
  handleInputRef = (input) => {
    this.input = input;
  };

  render() {
    return (
      <p>
       <Form onClick = {(name, surname)=>this.adicionarUser(name,surname)} /> 
       <div className="App-list">
          {this.state.users.map(user => (
            <p className="App-list-item">
              {this.getName(user)}
            <AppButton text="Remover" onClick={()=>this.removeUser(user)}/>
            </p>
          ))}
        </div>
      </p>
    );
  }
}
export default Users;
