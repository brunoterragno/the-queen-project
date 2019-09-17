import React from "react";
import "./App.css";
import Image from "./components/Image.js";
import Users from "./components/Users.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: "Paty", surname: "Garcia" },
        { name: "Andy", surname: "Garcia" }
      ],
      admins: [{ name: "Don", surname: "Garcia" }]
    };

    // pra fazer o bind precisa dar um assign de novo no método
    this.adicionarUser = this.adicionarUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  removeUser(removedUser) {
    this.setState({
      ...this.state,
      users: this.state.users.filter(user => user !== removedUser)
    });
  }

  adicionarUser(name, surname) {
    this.setState({
      ...this.state,
      users: [...this.state.users, { name: name, surname: surname }]
    });
  }
  removeAdmin = removedAdmin => {
    this.setState({
      ...this.state,
      admins: this.state.admins.filter(user => user !== removedAdmin)
    });
  };

  adicionarAdmin = (name, surname) => {
    this.setState({
      ...this.state,
      admins: [...this.state.admins, { name: name, surname: surname }]
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Image />
          <Users
            users={this.state.users}
            adicionarUser={this.adicionarUser}
            removeUser={this.removeUser}
          />
          <Users
            users={this.state.admins}
            adicionarUser={this.adicionarAdmin}
            removeUser={this.removeAdmin}
          />
        </header>
      </div>
    );
  }
}

export default App;
