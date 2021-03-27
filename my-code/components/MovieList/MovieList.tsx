import { memo } from 'react'
import { Movie } from '../../models/movie'
import Grid from '../Grid/Grid'
import MovieItem from './MovieItem/MovieItem'

interface Props {
    movies: Movie[]
}

const MovieList = ({ movies }: Props) => (
    <Grid justifyContent="center" justifyContentSm="flex-start">
        {movies.map(movie => (
            <MovieItem key={movie.imdb} movie={movie} />
        ))}
    </Grid>
)

export default memo(MovieList)
