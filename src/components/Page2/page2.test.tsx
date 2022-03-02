import React from "react";
import { render, screen } from "@testing-library/react";
import Page2 from "./index";

test("renders counter page", () => {
  render(<Page2 />);
  const linkElement = screen.getByText(/Counter/i);
  expect(linkElement).toBeInTheDocument();
});
