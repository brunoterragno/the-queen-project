import React from "react";
import "./App.css";
import Image from "./components/Image.js";
import Users from "./components/Users.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Image />
          <Users />
        </header>
      </div>
    );
  }
}

export default App;
