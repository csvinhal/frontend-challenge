import cx from 'classnames'
import EmptyState from '../components/EmptyState/EmptyState'
import Grid from '../components/Grid/Grid'
import GridItem from '../components/GridItem/GridItem'
import Layout from '../components/Layout/Layout'
import MovieList from '../components/MovieList/MovieList'
import MoviesLoading from '../components/MoviesLoading/MoviesLoading'
import SearchBar from '../components/SearchBar/SearchBar'
import Typography from '../components/Typography/Typography'
import { fetchMovies } from '../hooks/fetchMovies'

export const Home = (): JSX.Element => {
    const {
        state: { loading, data, error },
        effectFetchMovies,
    } = fetchMovies()

    let content
    if (loading) content = <MoviesLoading />
    else if (error) content = <Typography>Erro</Typography>
    else if (data) content = <MovieList movies={data.movies} />
    else
        content = (
            <Grid>
                <GridItem xs>
                    <EmptyState />
                </GridItem>
            </Grid>
        )

    return (
        <Layout className="container">
            <Grid>
                <GridItem xs>
                    <div
                        className={cx('container__search', {
                            'container__search--is-empty-state':
                                !loading && !data,
                        })}
                    >
                        <SearchBar
                            placeholder="Search movies..."
                            onChange={e => {
                                effectFetchMovies(e?.target?.value)
                            }}
                        />
                    </div>
                </GridItem>
            </Grid>
            {content}

            <style jsx>{`
                :global(.container) {
                    margin-top: 24px;
                }

                .container__search {
                    margin-bottom: 32px;
                }

                .container__search--is-empty-state {
                    margin-bottom: 25vh;
                }
            `}</style>
        </Layout>
    )
}

export async function getStaticProps(context) {
    return {
        props: {},
    }
}
export default Home
