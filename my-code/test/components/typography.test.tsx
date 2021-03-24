import Typography from '../../components/Typography/Typography'
import { render } from '../testUtils'

describe('Typography component', () => {
    it('should render', () => {
        const text = 'Render Test'
        const { asFragment, getByText } = render(
            <Typography>{text}</Typography>,
            {},
        )
        expect(asFragment()).toBeTruthy()
        expect(getByText(text)).toBeInTheDocument()
        expect(getByText(text).tagName.toLowerCase()).toBe('p')
    })

    it('should render with correct element', () => {
        const text = 'Render Test'
        const { getByText, rerender } = render(
            <Typography element="h1" data-testid="typography">
                {text}
            </Typography>,
            {},
        )
        expect(getByText(text).tagName.toLowerCase()).toBe('h1')

        rerender(
            <Typography element="span" data-testid="typography">
                {text}
            </Typography>,
        )

        expect(getByText(text).tagName.toLowerCase()).toBe('span')
    })
})
