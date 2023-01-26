import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import MockFn from "./mockfn";

describe("MockFn", () => {
  test("render correctly", () => {
    render(<MockFn count={0} />);
    const headingEle = screen.getByRole("heading");
    expect(headingEle).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <MockFn
        count={0}
        increment={incrementHandler}
        decrement={decrementHandler}
      />
    );

    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    const decrementBtn = screen.getByRole("button", { name: /decrement/i });

    await user.click(incrementBtn);
    await user.click(decrementBtn);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
