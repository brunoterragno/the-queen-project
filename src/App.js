import React from "react";
import "./App.css";
import Image from "./components/Image.js";
import Users from "./components/Users.js"

class App extends React.Component {
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
          <Image teste={true}/>
          <p>
             <Users teste={true} />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
