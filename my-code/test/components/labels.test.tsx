import Labels from '../../components/Labels/Labels'
import { render } from '../testUtils'

describe('Labels component', () => {
    it('should render', () => {
        const { getByText } = render(<Labels>18+</Labels>, {})
        expect(getByText('18+')).toBeInTheDocument()
    })

    it('should render with logo', () => {
        const { container, getByText } = render(
            <Labels logo="imdb">7.7/10</Labels>,
            {},
        )
        expect(getByText('7.7/10')).toBeInTheDocument()
        expect(container.querySelector('.labels')).toHaveClass('labels__logo')
    })

    it('should render with correct logo', () => {
        const { container, rerender } = render(
            <Labels logo="imdb">7.7/10</Labels>,
            {},
        )
        expect(container.querySelector('.imdb-icon')).toBeInTheDocument()

        rerender(<Labels logo="rotten">96%</Labels>)
        expect(container.querySelector('.rotten-icon')).toBeInTheDocument()
    })
})
