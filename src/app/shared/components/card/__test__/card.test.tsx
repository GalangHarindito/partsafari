import { render, screen } from "@testing-library/react";
import Card from "../card";
import { formatDate } from "@/utils/helper";
import "@testing-library/jest-dom";

describe("Card Component", () => {
  const mockData = {
    id: 1,
    task: "Test Task",
    category: "Test Category",
    createdAt: "2023-10-01T12:00:00Z",
    completed: true,
  };

  test("Card layout unchanged", () => {
    const { container } = render(<Card data={mockData} />);
    expect(container).toMatchSnapshot();
  });

  test("render task and category", () => {
    render(<Card data={mockData} />);
    const taskElement = screen.getByText(mockData.task);
    const categoryElement = screen.getByText(mockData.category);
    expect(taskElement).toBeInTheDocument();
    expect(categoryElement).toBeInTheDocument();
  });

  test("renders checkbox with correct state", () => {
    render(<Card data={mockData} />);

    // Check if the checkbox is checked
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  test("render checkbox with false state", () => {
    const mockFalseCheck = { ...mockData, completed: false };
    render(<Card data={mockFalseCheck} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  test("render date", () => {
    render(<Card data={mockData} />);

    const date = screen.getByText(formatDate(mockData.createdAt))
    expect(date).toBeInTheDocument();
  })
});
