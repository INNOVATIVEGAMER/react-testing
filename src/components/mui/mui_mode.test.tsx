import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import MuiMode from "./mui_mode";

describe("Mui Mode", () => {
  test("renders correctly", () => {
    render(<MuiMode />);

    const headingEle = screen.getByRole("heading");
    expect(headingEle).toHaveTextContent("dark mode");
  });
});
