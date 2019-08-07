import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
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
  render() {
    return (
      <p>
        <div className="App-list">
          {this.state.users.map(user => (
            <p className="App-list-item">
              {this.getName(user)}
              <button
                className="App-list-item-button"
                onClick={() => this.removeUser(user)}
              >
                Remove
              </button>
            </p>
          ))}
        </div>
      </p>
    );
  }
}
export default Users;
