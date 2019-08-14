import React from "react";

class Button extends React.Component {
    constructor(props){
        super (props);
        console.log(props);

    }
    render(){
        return(
            <button className="App-list-item-button" onClick={this.props.onClick}>
                {this.props.text}

            </button>
        );
    }
    
}
export default Button;