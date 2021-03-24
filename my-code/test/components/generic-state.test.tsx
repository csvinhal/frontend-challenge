import GenericState from '../../components/GenericState/GenericState'
import { render } from '../testUtils'

describe('ButtonIcon component', () => {
    it('should render', () => {
        const { getByTestId, getByText, getByAltText } = render(
            <GenericState
                data-testid="generic-state"
                title="Error title"
                subtitle="Error subtitle"
                image="/illustration-empty-state.png"
            />,
            {},
        )
        expect(getByTestId('generic-state')).toBeInTheDocument()
        expect(getByText('Error title')).toBeInTheDocument()
        expect(getByAltText('Empty state image')).toBeInTheDocument()
    })
})
