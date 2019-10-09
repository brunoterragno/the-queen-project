import React from 'react';
import ReactDOM from 'react-dom';
import Users from "./Users";
import render from '@testing-library/react';

it('renders without crashing', () => {
    const list = []
    const div = document.createElement('div');
    ReactDOM.render(<Users users={list} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

    describe ("User", () => {
      it("should return user list if type is user", () => {
        const component = render(<Users type= {'users'} users={[]}/>)
        expect(component).toEqual({})


      });
        
    });


  // recebe uma lista  e mostra a lista
  // recebe duas funções: Add e remove e o tipo(user ou admin)