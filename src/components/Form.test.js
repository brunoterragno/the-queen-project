import React from "react";
import Form from "./Form";
import { render, fireEvent } from "@testing-library/react";

describe("Form component", () => {
  it("should add new users", () => {
    const onClickAction = jest.fn();
    const { getByText, getByTestId } = render(<Form onClick={onClickAction} />);

    fireEvent.change(getByTestId("input-name"), { target: { value: "Paty" } });
    fireEvent.click(getByText("Adicionar"));

    expect(onClickAction).toHaveBeenCalled();
    expect(onClickAction).toHaveBeenCalledWith("Paty");
  });
});

// recebe um clique e retorna um nome e sobrenome

// tem dois inputs
