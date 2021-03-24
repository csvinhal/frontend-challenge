import ButtonIcon from '../../components/ButtonIcon/ButtonIcon'
import { render } from '../testUtils'

describe('ButtonIcon component', () => {
    it('should render', () => {
        const { asFragment, getByTestId } = render(
            <ButtonIcon data-testid="button-icon" />,
            {},
        )
        expect(asFragment()).toBeTruthy()
        expect(getByTestId('button-icon')).toBeInTheDocument()
    })
})
