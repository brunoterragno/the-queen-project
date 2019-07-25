import React from "react";
import ingrid from "./images/ingrid.png";
import bruno from "./images/bruno.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [ingrid, bruno],
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
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.pictures[Math.round(Math.random())]}
            className="App-logo"
            alt="logo"
          />
        </header>
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
      </div>
    );
  }
}

export default App;
