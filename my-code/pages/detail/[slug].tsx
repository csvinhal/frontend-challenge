import {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from 'next'
import Image from 'next/image'
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton'
import Labels from '../../components/Labels/Labels'
import Layout from '../../components/Layout/Layout'
import SummaryCredit from '../../components/SummaryCredit/SummaryCredit'
import SummaryLabels from '../../components/SummaryLabels/SummaryLabels'
import Typography from '../../components/Typography/Typography'
import { MovieDetails } from '../../models/movieDetails'

export const MovieDetail = ({
    movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => (
    <Layout className="mb-3" showBackIcon>
        <div className="summary">
            <div className="summary__image">
                <Image
                    src={movie.poster}
                    layout="responsive"
                    width={480}
                    height={640}
                />
            </div>

            <div className="content__detail">
                <SummaryLabels
                    className="mb-3"
                    runtime={movie.runtime}
                    rated={movie.rated}
                    year={movie.year}
                />

                <Typography className="mb-3" size="bold">
                    {movie.title}
                </Typography>

                <div className="summary__rates">
                    <Labels className="mb-3" logo="imdb">
                        {movie.imdbRate}
                    </Labels>
                    {movie.rottenRate && (
                        <Labels className="mb-3" logo="rotten">
                            {movie.rottenRate}
                        </Labels>
                    )}
                    <FavoriteButton className="mb-3" favorite={false}>
                        Add to favourites
                    </FavoriteButton>
                </div>

                <div className="mb-3">
                    <Typography className="mb-2" color="secundary">
                        Plot
                    </Typography>
                    <Typography>{movie.plot}</Typography>
                </div>

                <div className="summary__credits">
                    <SummaryCredit
                        className="mt-1"
                        title="Cast"
                        list={movie.actors}
                    />
                    <SummaryCredit
                        className="mt-1"
                        title="Genre"
                        list={movie.genre}
                    />
                    <SummaryCredit
                        className="mt-1"
                        title="Director"
                        list={movie.director}
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

export const getServerSideProps: GetServerSideProps<{
    movie: MovieDetails
}> = async (context: GetServerSidePropsContext) => {
    const { params } = context
    const fetchUrl = `${process.env.BASE_URL}/api/movie-detail/${params.slug}`
    const res = await fetch(fetchUrl)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { movie: data },
    }
}
export default MovieDetail
