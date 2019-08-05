import React from "react";
import ingrid from "../images/ingrid.png";
import bruno from "../images/bruno.png";

class Image extends React.Component{
    constructor(props){
        super(props);
        this.state = {pictures: [ingrid, bruno]}
        console.log(props)
    }
    render(){
        return (
            <img src={this.state.pictures[Math.round(Math.random())]}className="App-logo"alt="logo"/>
        )
    }

}

export default Image;