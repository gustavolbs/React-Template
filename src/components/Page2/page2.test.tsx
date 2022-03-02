import React from "react";
import { render, screen } from "@testing-library/react";
import Page2 from "./index";

test("renders learn react link", () => {
  render(<Page2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
