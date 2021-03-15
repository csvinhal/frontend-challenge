import { memo } from 'react'
import { Movie } from '../../../models/movie'
import GridItem from '../../GridItem/GridItem'
import MovieCard from '../../MovieCard/MovieCard'

interface Props {
    movie: Movie
}
const MovieItem = ({ movie }: Props) => (
    <GridItem xs md={4} lg={3} xl={2}>
        <MovieCard
            href={movie.poster}
            srcImg={movie.poster}
            favorite={false}
            title={movie.title}
            year={movie.year}
        />
    </GridItem>
)

export default memo(
    MovieItem,
    (prevProps: Readonly<Props>, nextProp: Readonly<Props>) => {
        return prevProps.movie.imdb !== nextProp.movie.imdb
    },
)
