import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// recebe um texto e um click
// cria o botão com o texto e clica

//button-form-users
