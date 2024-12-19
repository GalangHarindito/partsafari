import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "../checkbox";
import "@testing-library/jest-dom";

describe("Checkbox Component", () => {
  test("Checkbox render with initial state true", () => {
    render(<Checkbox check={true} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
    expect(checkbox).toMatchSnapshot();
  });

  test("Checkbox render with initial state false", () => {
    render(<Checkbox check={false} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  test("Toggles Checkbox", () => {
    render(<Checkbox check={false} />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
