import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chips from '../chips';
import '@testing-library/jest-dom';

describe('Chips Component', () => {
  const mockOnClick = jest.fn();

  test('renders with the correct title', () => {
    const { container } = render(
      <Chips title="Test Title" active="Test Title" onClick={mockOnClick} />
    );

    const chipElement = screen.getByText(/TEST TITLE/i);
    expect(chipElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('applies active class', () => {
    const { container } = render(
      <Chips title="Active Chip" active="Active Chip" onClick={mockOnClick} />
    );

    expect(container.firstChild).toHaveClass('bg-tab-active');
  });

  test('applies inactive class', () => {
    const { container } = render(
      <Chips title="Inactive Chip" active="Active Chip" onClick={mockOnClick} />
    );

    expect(container.firstChild).toHaveClass('bg-tab-inactive');
  });

  test('calls onClick function', () => {
    render(
      <Chips
        title="Clickable Chip"
        active="Clickable Chip"
        onClick={mockOnClick}
      />
    );

    const chipElement = screen.getByText(/CLICKABLE CHIP/i);
    fireEvent.click(chipElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
