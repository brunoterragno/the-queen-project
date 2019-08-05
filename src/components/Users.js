import React from "react";

class Users extends React.Component{
     constructor(props){
         super(props);
         console.log(props)
         this.state ={ users: [
            { name: "Paty", surname: "Garcia" },
            { name: "Andy", surname: "Garcia" },
            { name: "Don", surname: "Garcia" },
          ]}; 
     }
     getName(user) {
         return `${user.name} ${user.surname}`;
        }
     render (){
         return (
            <div className="App-list">{this.state.users.map(user => (<p className="App-list-item">{this.getName(user)}
              </p>))}
            </div>
         ) 
     }
}
export default Users;