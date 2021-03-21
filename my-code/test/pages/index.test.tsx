import { fireEvent, waitFor } from '@testing-library/dom'
import { AxiosResponse } from 'axios'
import * as moviesApi from '../../api/moviesApi'
import { MovieResponse } from '../../models/movie'
import { Home } from '../../pages/index'
import { render } from '../testUtils'
import moviesJson from './__mocks__/movies.json'

const axiosResponse: AxiosResponse<MovieResponse> = {
    data: moviesJson,
    status: 200,
    statusText: 'OK',
    config: {},
    headers: {},
}

describe('Home page', () => {
    it('should matches snapshot', () => {
        const { asFragment } = render(<Home />, {})
        expect(asFragment()).toMatchSnapshot()
    })

    it('should show movies', async () => {
        jest.spyOn(moviesApi, 'getMovies').mockImplementation(() =>
            Promise.resolve(axiosResponse),
        )

        const { container } = render(<Home />, {})
        const input = container.querySelector('#search-bar')
        expect(input).toBeTruthy()

        fireEvent.change(input, { target: { value: 'What' } })

        await waitFor(() => expect(moviesApi.getMovies).toHaveBeenCalled())

        expect(container.querySelectorAll('a.movie-card')).toHaveLength(10)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})
