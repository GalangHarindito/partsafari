import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '../filter';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import '@testing-library/jest-dom';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

const mockPush = jest.fn();

describe('Filter Component', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (usePathname as jest.Mock).mockReturnValue('/test-path');
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders filter options correctly', () => {
    const data = [
      { id: 1, category: 'Category 1' },
      { id: 2, category: 'Category 2' },
    ];

    const { container } = render(<Filter data={data} />);

    expect(screen.getByText(/Filter:/)).toBeInTheDocument();
    expect(screen.getByText(/Category 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Category 2/i)).toBeInTheDocument();
    expect(screen.getByText(/all/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('sets active category on click', () => {
    const data = [
      { id: 1, category: 'Category 1' },
      { id: 2, category: 'Category 2' },
    ];

    render(<Filter data={data} />);

    const category1Chip = screen.getByText(/Category 1/i);
    fireEvent.click(category1Chip);

    expect(mockPush).toHaveBeenCalledWith('/test-path?tab=Category+1');
  });

  test('sets active category to "all" on initial render', () => {
    const data = [
      { id: 1, category: 'Category 1' },
      { id: 2, category: 'Category 2' },
    ];

    render(<Filter data={data} />);

    expect(mockPush).toHaveBeenCalledWith('/test-path?tab=all');
  });
});
