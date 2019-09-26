import React from 'react';
import ReactDOM from 'react-dom';
import Users from "./Users"

it('renders without crashing', () => {
    const list = []
    const div = document.createElement('div');
    ReactDOM.render(<Users users={list} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // recebe uma lista  e mostra a lista
  // recebe duas funções: Add e remove e o tipo(user ou admin)