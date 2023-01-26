import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countEle = screen.getByRole("heading");
    expect(countEle).toBeInTheDocument();

    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    expect(incrementBtn).toBeInTheDocument();

    const inputEle = screen.getByRole("spinbutton");
    expect(inputEle).toBeInTheDocument();

    const setBtn = screen.getByRole("button", { name: /set/i });
    expect(setBtn).toBeInTheDocument();
  });

  test("counter shows 0 at the start", () => {
    render(<Counter />);
    const countEle = screen.getByRole("heading");
    expect(countEle).toHaveTextContent("0");
  });

  test("loading is not shown at the start", () => {
    render(<Counter />);
    const loadingEle = screen.queryByText("Loading");
    expect(loadingEle).not.toBeInTheDocument();
  });

  test("clicking on the increment button first shows loading", async () => {
    user.setup();
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    await user.click(incrementBtn);

    const loadingELe = screen.getByText("Loading");
    expect(loadingELe).toBeInTheDocument();
  });

  test("clicking on the increment button changes the counter to 1", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: /increment/i });

    await user.click(incrementBtn);

    const countEle = await screen.findByRole("heading");
    expect(countEle).toHaveTextContent("1");
  });

  test("clicking on the increment button twice changes the counter to 2", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: /increment/i });

    await user.click(incrementBtn);

    const countEle = await screen.findByRole("heading");
    expect(countEle).toHaveTextContent("1");

    await user.click(incrementBtn);

    const countEle2 = await screen.findByRole("heading");
    expect(countEle2).toHaveTextContent("2");
  });

  test("clicking on the set button first shows loading", async () => {
    user.setup();
    render(<Counter />);

    const setBtn = screen.getByRole("button", { name: /set/i });
    await user.click(setBtn);

    const loadingELe = screen.getByText("Loading");
    expect(loadingELe).toBeInTheDocument();
  });

  test("render the count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);

    const inputEle = screen.getByRole("spinbutton");

    // 1. First Method to enter input
    // await user.click(inputEle);
    // await user.keyboard("10");

    // 2. Second method to enter input
    await user.type(inputEle, "10");

    expect(inputEle).toHaveValue(10);

    const setEle = screen.getByRole("button", { name: /set/i });

    await user.click(setEle);

    const countEle = await screen.findByRole("heading");
    expect(countEle).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    const inputEle = screen.getByRole("spinbutton");
    const setBtn = screen.getByRole("button", { name: /set/i });

    await user.tab();
    expect(incrementBtn).toHaveFocus();

    await user.tab();
    expect(inputEle).toHaveFocus();

    await user.tab();
    expect(setBtn).toHaveFocus();
  });
});
