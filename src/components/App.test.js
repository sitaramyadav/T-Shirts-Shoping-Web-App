import React from "react";
import { render, getByTestId, getByText } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  const { getByTestId, container } = render(<App />);
  it("Snapshot testing", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
