import Link from 'next/link'
import { memo } from 'react'
import { Movie } from '../../../models/movie'
import GridItem from '../../GridItem/GridItem'
import MovieCard from '../../MovieCard/MovieCard'

interface Props {
    movie: Movie
}
const MovieItem = ({ movie }: Props) => (
    <GridItem xs md={4} lg={3} xl={2}>
        <Link href={`/detail/${movie.imdb}`} passHref>
            <MovieCard
                href=""
                srcImg={movie.poster}
                favorite={movie.favorite}
                title={movie.title}
                year={movie.year}
            />
        </Link>
    </GridItem>
)

export default memo(
    MovieItem,
    (prevProps: Readonly<Props>, nextProp: Readonly<Props>) => {
        return prevProps.movie.imdb !== nextProp.movie.imdb
    },
)
