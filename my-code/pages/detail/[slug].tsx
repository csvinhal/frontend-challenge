import {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from 'next'
import Image from 'next/image'
import { useCallback, useMemo, useState } from 'react'
import { getMovieDetail, updateMovieFavorite } from '../../api/moviesApi'
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton'
import Labels from '../../components/Labels/Labels'
import Layout from '../../components/Layout/Layout'
import SummaryCredit from '../../components/SummaryCredit/SummaryCredit'
import SummaryLabels from '../../components/SummaryLabels/SummaryLabels'
import Typography from '../../components/Typography/Typography'
import { MovieDetails } from '../../models/movieDetails'
export const MovieDetail = ({
    movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
    const [movieDetail, setMovieDetail] = useState(movie)
    const toggleFavorite = useCallback(async () => {
        const { favorite } = movieDetail
        const { data } = await updateMovieFavorite(movieDetail.imdb, favorite)
        setMovieDetail({ ...movieDetail, favorite: data.favorite })
    }, [movieDetail, setMovieDetail])

    const favoriteLabel = useMemo(
        () => (movieDetail.favorite ? 'Added' : 'Add to favourites'),
        [movieDetail.favorite],
    )

    return (
        <Layout className="mb-3" showBackIcon>
            <div className="summary">
                <div className="summary__image">
                    <Image
                        src={movieDetail.poster}
                        layout="responsive"
                        width={480}
                        height={640}
                    />
                </div>

                <div className="content__detail">
                    <SummaryLabels
                        className="mb-3"
                        runtime={movieDetail.runtime}
                        rated={movieDetail.rated}
                        year={movieDetail.year}
                    />

                    <Typography className="mb-3" size="bold">
                        {movieDetail.title}
                    </Typography>

                    <div className="summary__rates">
                        <Labels className="mb-3" logo="imdb">
                            {movieDetail.imdbRate}
                        </Labels>
                        {movieDetail.rottenRate && (
                            <Labels className="mb-3" logo="rotten">
                                {movieDetail.rottenRate}
                            </Labels>
                        )}
                        <FavoriteButton
                            className="mb-3"
                            favorite={movieDetail.favorite}
                            onClick={toggleFavorite}
                        >
                            {favoriteLabel}
                        </FavoriteButton>
                    </div>

                    <div className="mb-3">
                        <Typography className="mb-2" color="secundary">
                            Plot
                        </Typography>
                        <Typography>{movieDetail.plot}</Typography>
                    </div>

                    <div className="summary__credits">
                        <SummaryCredit
                            className="mt-1"
                            title="Cast"
                            list={movieDetail.actors}
                        />
                        <SummaryCredit
                            className="mt-1"
                            title="Genre"
                            list={movieDetail.genre}
                        />
                        <SummaryCredit
                            className="mt-1"
                            title="Director"
                            list={movieDetail.director}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                    .summary {
                        display: flex;
                        flex-direction: column;
                    }
    
                    .summary__rates {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }
    
                    .summary__rates > :global(*:not(last-children)) {
                        margin-right: 16px;
                    }
    
                    .summary__credits {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        text-align: center;
                    }
    
                    .summary__image {
                        position: relative;
                        overflow: hidden;
                        width: 160px;
                        height: auto;
                        border-radius: 8px;
                        margin: 0 auto 16px auto;
                    }
    
                    @media (min-width: 768px) {
                        :global(.back__button) {
                            margin-bottom 24px;
                        }
    
                        .summary {
                            flex-direction: row-reverse;
                            justify-content: space-between;
                        }
    
                        .content__detail {
                            flex: 0 1 50%;
                            padding: 8px;
                        }
    
                        .summary__image {
                            width: 480px;
                            max-height: 640px;
                            border-radius: 8px;
                            margin-left: auto;
                        }
    
                        .summary__credits {
                            flex-direction: row;
                            justify-content: space-around;
                            align-items: flex-start;
                            text-align: left;
                        }
                    }
                `}</style>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<{
    movie: MovieDetails
}> = async (context: GetServerSidePropsContext) => {
    const { params } = context
    const res = await getMovieDetail(params.slug as string)

    if (!res.data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { movie: res.data },
    }
}
export default MovieDetail
