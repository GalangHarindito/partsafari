import { render, screen } from "@testing-library/react";
import List from "../list";
import Card from "@/shared/components/card/card";
import "@testing-library/jest-dom";

jest.mock("@/shared/components/card/card", () => {
  return function mockCard({ data }: { data: any }) {
    return <div data-testid="mock-card">{data.task}</div>;
  };
});

describe("Fragment List", () => {
  const mockData = [
    {
      id: 1,
      category: "Work",
      task: "Complete project",
      createdAt: "2023-01-01",
      completed: false,
    },
    {
      id: 2,
      category: "Personal",
      task: "Go grocery shopping",
      createdAt: "2023-01-02",
      completed: true,
    },
  ];

  test("Render Task,category,cratedAt", () => {
    render(<List datas={mockData} />);

    expect(screen.getByText("Complete project")).toBeInTheDocument();
    expect(screen.getByText("Go grocery shopping")).toBeInTheDocument();
    
    const { container } = render(<List datas={mockData} />);
    expect(container).toMatchSnapshot();
  });

  test("Render length of the data", () => {
    render(<List datas={mockData} />);

    const cards = screen.getAllByTestId("mock-card");
    expect(cards.length).toBe(mockData.length);
  });

  test("Render the correct card", () => {
    render(<List datas={mockData} />);

    mockData.forEach((data) => {
      expect(screen.getByText(data.task)).toBeInTheDocument();
    });
  });

  test('renders "Sorry, No Data Available" when datas is an empty array', () => {

    const { getByText, container } = render(<List datas={[]} />);
    expect(container).toMatchSnapshot();
    const noDataMessage = getByText('Sorry, No Data Available');
    expect(noDataMessage).toBeInTheDocument();
  });
});
