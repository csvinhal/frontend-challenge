import { fireEvent, waitFor } from '@testing-library/dom'
import { AxiosResponse } from 'axios'
import { toMatchDiffSnapshot } from 'snapshot-diff'
import * as moviesApi from '../../api/moviesApi'
import { MovieDetail } from '../../pages/detail/[slug]'
import { render } from '../testUtils'
import movie from './__mocks__/movie-detail.json'

expect.extend({ toMatchDiffSnapshot })

const axiosResponse: AxiosResponse = {
    data: { favorite: true },
    status: 200,
    statusText: 'OK',
    config: {},
    headers: {},
}

describe('Movie detail page', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<MovieDetail movie={movie} />, {})
        expect(asFragment()).toMatchSnapshot()
    })

    it('matches snapshot', () => {
        const { asFragment, rerender } = render(
            <MovieDetail movie={movie} />,
            {},
        )
        const firstRender = asFragment()
        const favoriteMovie = { ...movie, favorite: true }
        rerender(<MovieDetail movie={favoriteMovie} />)
        expect(firstRender).toMatchDiffSnapshot(asFragment())
    })

    it('should add movie to favorite', async () => {
        jest.spyOn(moviesApi, 'updateMovieFavorite').mockImplementation(() =>
            Promise.resolve(axiosResponse),
        )

        const { getByText } = render(<MovieDetail movie={movie} />, {})

        const favoriteButton = getByText('Add to favourites')
        expect(favoriteButton).toBeTruthy()

        fireEvent.click(favoriteButton)

        await waitFor(() =>
            expect(moviesApi.updateMovieFavorite).toHaveBeenCalled(),
        )

        expect(getByText('Added')).toBeTruthy()
    })
})
