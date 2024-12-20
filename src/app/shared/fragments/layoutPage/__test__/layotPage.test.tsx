import { render } from '@testing-library/react';
import LayoutPage from '../layoutPage';
import '@testing-library/jest-dom';

describe('LayoutPage Component', () => {
  test('Render the header with correct title', () => {
    const { container, getByText } = render(
      <LayoutPage>
        <div>Test Children</div>
      </LayoutPage>
    );
    const title = getByText(/to do/i);

    expect(title).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Render children', () => {
    const { getByText } = render(
      <LayoutPage>
        <div>Test Children</div>
      </LayoutPage>
    );

    const childElement = getByText(/test children/i);
    expect(childElement).toBeInTheDocument();
  });
});
