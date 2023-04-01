import React from "react";
import { render, screen } from "@testing-library/react";
import ReactMainScreen from "./ReactMainScreen";

test("renders learn react link", () => {
  render(<ReactMainScreen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
