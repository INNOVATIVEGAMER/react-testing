// Greet should render the text hello and if a name is passed into the component
// It should render followed by name

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const greetMsgEle = screen.getByText(/Hello/);
    expect(greetMsgEle).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Prasad" />);
    const greetMsgEle = screen.getByText("Hello Prasad");
    expect(greetMsgEle).toBeInTheDocument();
  });
});
