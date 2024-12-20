import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from '../checkbox';
import '@testing-library/jest-dom';

describe('Checkbox Component', () => {
  test('Checkbox render with initial state true', () => {
    render(<Checkbox check={true} label={''} onChange={() => {}}  />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(checkbox).toMatchSnapshot();
  });

  test('Checkbox render with label', () => {
    render(<Checkbox check={true} label={'test'} onChange={() => {}} />);
    const label = screen.getByLabelText(/test/i);
    expect(label).toBeInTheDocument();
  });

  test('Checkbox render with initial state false', () => {
    render(<Checkbox check={false} label={''} onChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('Toggles Checkbox', () => {

    const handleChange = jest.fn();
    render(<Checkbox check={false} label={''} onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  test('updated the checked stae when onChange', () => {
    const handleChange = jest.fn();
    render(<Checkbox check={false} label={''} onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()

  })
});
