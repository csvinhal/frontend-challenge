import EmptyState from '../components/EmptyState/EmptyState'
import Grid from '../components/Grid/Grid'
import GridItem from '../components/GridItem/GridItem'
import Layout from '../components/Layout/Layout'
import SearchBar from '../components/SearchBar/SearchBar'
import Typography from '../components/Typography/Typography'
import { fetchMovies } from '../hooks/fetchMovies'

export const Home = (): JSX.Element => {
    const {
        state: { loading, data, error },
        effectFetchMovies,
    } = fetchMovies()

    let content
    if (loading) content = <Typography>Loading...</Typography>
    else if (error) content = <Typography>Erro</Typography>
    else if (data) content = <Typography>{JSON.stringify(data)}</Typography>
    else
        content = (
            <div className="container__empty-state">
                <EmptyState />
            </div>
        )

    return (
        <Layout className="container">
            <Grid>
                <GridItem>
                    <SearchBar
                        placeholder="Search movies..."
                        onChange={e => {
                            effectFetchMovies(e?.target?.value)
                        }}
                    />
                </GridItem>
            </Grid>
            <Grid>
                <GridItem>{content}</GridItem>
            </Grid>

            <style jsx>{`
                :global(.container) {
                    margin-top: 24px;
                }

                .container__empty-state {
                    margin-top: 25vh;
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
