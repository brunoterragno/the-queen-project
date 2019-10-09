import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import { render, fireEvent } from "@testing-library/react";

describe("Form component", () => {
  it("should add new users", () => {
    const onClickAction = jest.fn();
    const { getByText } = render(<Form onClick={onClickAction} />);

    fireEvent.click(getByText("Adicionar"), {});

    expect(onClickAction).toHaveBeenCalled();
  });
});

// recebe um clique e retorna um nome e sobrenome

// tem dois inputs
