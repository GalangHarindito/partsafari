import { render } from "@testing-library/react";
import Typography from "../typography";
import "@testing-library/jest-dom";


describe('Typography Component',() => {

    test('Component header h1', () => {
        const { getByText, container } = render(<Typography type="H1">Heading 1</Typography>)
        const heading = getByText('Heading 1')
        expect(heading.tagName).toBe('H1')
        expect(heading).toHaveClass('font-bold xl:text-4xl lg:text-4xl md:text-2xl')
        expect(container).toMatchSnapshot();
    })

    test('Component header h2', () => {
        const { getByText, container } = render(<Typography type="H2">Heading 2</Typography>)
        const heading = getByText('Heading 2')
        expect(heading.tagName).toBe('H2')
        expect(heading).toHaveClass('font-bold xl:text-3xl lg:text-2xl md:text-xl')
        expect(container).toMatchSnapshot();
    })

    test('Component header h3', () => {
        const { getByText, container } = render(<Typography type="H3">Heading 3</Typography>)
        const heading = getByText('Heading 3')
        expect(heading.tagName).toBe('H3')
        expect(heading).toHaveClass('font-bold xl:text-2xl lg:text-xl md:text-lg')
        expect(container).toMatchSnapshot();
    })

    test('Component header h4', () => {
        const { getByText, container } = render(<Typography type="H4">Heading 4</Typography>)
        const heading = getByText('Heading 4')
        expect(heading.tagName).toBe('H4')
        expect(heading).toHaveClass('font-bold xl:text-xl lg:text-lg')
        expect(container).toMatchSnapshot();
    })

    test('Component header h5', () => {
        const { getByText, container } = render(<Typography type="H5">Heading 5</Typography>)
        const heading = getByText('Heading 5')
        expect(heading.tagName).toBe('H5')
        expect(heading).toHaveClass('font-bold xl:text-lg lg:text-base')
        expect(container).toMatchSnapshot();
    })

    test('Component header h6', () => {
        const { getByText, container } = render(<Typography type="H6">Heading 6</Typography>)
        const heading = getByText('Heading 6')
        expect(heading.tagName).toBe('H6')
        expect(heading).toHaveClass('font-bold xl:text-base')
        expect(container).toMatchSnapshot();
    })

    test('Component header p', () => {
        const { getByText, container } = render(<Typography type="p">This is a paragraph</Typography>)
        const heading = getByText('This is a paragraph')
        expect(heading.tagName).toBe('P')
        expect(heading).not.toHaveClass('font-bold')
        expect(container).toMatchSnapshot();
    })

    it('applies additional class names', () => {
        const { getByText } = render(<Typography type="H1" className={['custom-class']}>Heading with custom class</Typography>);
        const heading = getByText('Heading with custom class');
        expect(heading).toHaveClass('custom-class');
      });
    
}) 
