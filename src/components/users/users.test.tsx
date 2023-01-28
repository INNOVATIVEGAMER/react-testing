import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../mocks/server";
import { users } from "../../utils/constants";
import Users from "./users";

describe("Users", () => {
  test("render correctly", () => {
    render(<Users />);
    const headingEle = screen.getByRole("heading");
    expect(headingEle).toHaveTextContent(/users/i);
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const usersEles = await screen.findAllByRole("listitem");

    expect(usersEles).toHaveLength(users.length);
  });

  test("renders error text", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<Users />);

    const errorTxt = await screen.findByText(/error fetching users/i);
    expect(errorTxt).toBeInTheDocument();
  });

  test("do not render user list on error", () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    const usersEles = screen.queryAllByRole("listitem");
    expect(usersEles).toHaveLength(0);
  });
});
