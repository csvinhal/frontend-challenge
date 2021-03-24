import SearchBar from '../../components/SearchBar/SearchBar'
import { render } from '../testUtils'

describe('SearchBar component', () => {
    it('should render', () => {
        const { getByLabelText, getByPlaceholderText } = render(
            <SearchBar placeholder="Search movies..." />,
            {},
        )
        expect(getByLabelText('Search movies...')).toBeInTheDocument()
        expect(getByPlaceholderText('Search movies...')).toBeInTheDocument()
        expect(getByPlaceholderText('Search movies...')).toBeEnabled()
    })

    it('should be disabled', () => {
        const { getByPlaceholderText } = render(
            <SearchBar placeholder="Search movies..." disabled />,
            {},
        )
        expect(getByPlaceholderText('Search movies...')).toBeDisabled()
    })
})
