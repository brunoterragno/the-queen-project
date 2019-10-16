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
        { name: "Andy", surname: "Garcia" },
        { name: "Don", surname: "Garcia" }
      ], 
      admins: [{name: "Rob", surname:"erto"}]
    };

    // pra fazer o bind precisa dar um assign de novo no método
    this.adicionarUser = this.adicionarUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }
 
  removeUser = (removedUser,type) => {
    if(type === "user"){
      this.setState({
        ...this.state,
        users: this.state.users.filter(user => user !== removedUser)
    });
  }
  if(type === "admin" ){
    this.setState({
      ...this.state,
      admins: this.state.admins.filter(user => user !== removedUser)
    });

  }
  
}

  adicionarUser = (name, surname, type) => {
    if(type === "user") {
      this.setState({
        ...this.state,
        users: [...this.state.users,
          {name: name, surname: surname}
        ]
      })
    }
    if(type === "admin"){
      this.setState({
        ...this.state,
        admins: [...this.state.admins,
          {name: name, surname: surname}
        ]
      })
    }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Image />
          <Users type= {"user"}  users={this.state.users} adicionarUser={this.adicionarUser} removeUser={this.removeUser} />
          <Users type= {"admin"} users={this.state.admins} adicionarUser={this.adicionarUser} removeUser={this.removeUser} />
        </header>
      </div>
    );
  }
}

export default App;
