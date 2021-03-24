import Icon from '../../components/Icon/Icon'
import { render } from '../testUtils'

describe('ButtonIcon component', () => {
    it('should render', () => {
        const { container } = render(<Icon icon="arrow" />, {})
        expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('should render correct icon', () => {
        const { container, rerender } = render(<Icon icon="heart" />, {})
        expect(container.querySelector('#icon__heart')).toBeInTheDocument()

        rerender(<Icon icon="arrow" />)
        expect(container.querySelector('#icon__arrow')).toBeInTheDocument()

        rerender(<Icon icon="magnifier" />)
        expect(container.querySelector('#icon__magnifier')).toBeInTheDocument()

        rerender(<Icon icon="imdb" />)
        expect(container.querySelector('#icon__imdb')).toBeInTheDocument()

        rerender(<Icon icon="rotten" />)
        expect(container.querySelector('#icon__rotten')).toBeInTheDocument()
    })
})
