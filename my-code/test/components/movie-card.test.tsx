import MovieCard from '../../components/MovieCard/MovieCard'
import { render } from '../testUtils'
import movie from '../__mocks__/movie.json'

describe('MovieCard component', () => {
    it('should render', () => {
        const { asFragment, getByText, getByAltText } = render(
            <MovieCard
                href="/"
                title={movie.title}
                year={movie.year}
                srcImg={movie.poster}
                favorite={movie.favorite}
            />,
            {},
        )
        expect(asFragment()).toBeTruthy()
        expect(getByText(movie.title)).toBeInTheDocument()
        expect(getByText(movie.year)).toBeInTheDocument()
        expect(getByAltText('Picture of the movie')).toBeInTheDocument()
        expect(getByAltText('Picture of the movie')).toHaveAttribute('src')
    })

    it('should show favorite', () => {
        const { container, rerender } = render(
            <MovieCard
                href="/"
                title={movie.title}
                year={movie.year}
                srcImg={movie.poster}
                favorite={movie.favorite}
            />,
            {},
        )
        expect(container.querySelector('.movie-card__favorite-icon')).toBeNull()

        rerender(
            <MovieCard
                href="/"
                title={movie.title}
                year={movie.year}
                srcImg={movie.poster}
                favorite={true}
            />,
        )

        expect(
            container.querySelector('.movie-card__favorite-icon'),
        ).toBeInTheDocument()
    })
})
