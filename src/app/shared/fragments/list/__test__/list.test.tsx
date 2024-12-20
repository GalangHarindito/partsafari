import { queryByText, render, screen } from '@testing-library/react';
import List from '../list';
import { useSearchParams } from 'next/navigation';
import '@testing-library/jest-dom';

jest.mock('@/shared/components/card/card', () => {
  return function mockCard({ data }: { data: any }) {
    return <div data-testid="mock-card">{data.task}</div>;
  };
});

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

describe('Fragment List', () => {
  const mockData = [
    {
      id: 1,
      category: 'work',
      task: 'Task 1',
      createdAt: '2023-01-01',
      completed: false,
    },
    {
      id: 2,
      category: 'personal',
      task: 'Task 2',
      createdAt: '2023-01-02',
      completed: true,
    },
    {
      id: 3,
      category: 'work',
      task: 'Task 3',
      createdAt: '2023-01-03',
      completed: false,
    },
  ];

  const mockDataWork = [
    {
      id: 1,
      category: 'work',
      task: 'Task 1',
      createdAt: '2023-01-01',
      completed: false,
    },
    {
      id: 3,
      category: 'work',
      task: 'Task 3',
      createdAt: '2023-01-03',
      completed: false,
    },
  ];

  beforeEach(() => {
    // Reset the mock before each test
    jest.clearAllMocks();
  });

  test('Render Task if the category is all', () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue('all'),
    });

    const { container } = render(<List datas={mockData} />);
    const cards = screen.getAllByTestId('mock-card');

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(cards.length).toBe(mockData.length);
    expect(container).toMatchSnapshot();
  });

  test('Render Task if the category is work', () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue('work'),
    });

    const { container } = render(<List datas={mockDataWork} />);
    const cards = screen.getAllByTestId('mock-card');

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
    expect(cards.length).toBe(mockDataWork.length);

    expect(container).toMatchSnapshot();
  });

  test('renders "Sorry, No Data Available" when datas is an empty array', () => {
    const { getByText, container } = render(<List datas={[]} />);
    const noDataMessage = getByText('Sorry, No Data Available');
    expect(noDataMessage).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
