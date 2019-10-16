import React from "react";
import Users from "./Users";
import { render } from "@testing-library/react";

describe("User component", () => {
  it("should return empty user list when zero users", () => {
    const { getByTestId } = render(<Users type={"users"} users={[]} />);
    expect(getByTestId("user-list").children.length).toBe(0);
  });
  it("should return user list when contains users", () => {
    const { getByTestId, getByText } = render(
      <Users type={"users"} users={[{ name: "Paty", surname: "Garcia" }]} />
    );
    expect(getByTestId("user-list").children.length).toBe(1);
    expect(getByText("Remover")).not.toBeNull();
    expect(getByText("Paty Garcia")).not.toBeNull();
  
  });
});

// recebe uma lista  e mostra a lista
// recebe duas funções: Add e remove e o tipo(user ou admin)
