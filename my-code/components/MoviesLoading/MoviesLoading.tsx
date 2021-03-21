import Grid from '../Grid/Grid'
import GridItem from '../GridItem/GridItem'
import MovieSkeleton from '../MovieSkeleton/MovieSkeleton'

const MoviesLoading = () => (
    <Grid id="movies-loading">
        <GridItem xs md={4} lg={3} xl={2}>
            <MovieSkeleton />
        </GridItem>
        <GridItem xs md={4} lg={3} xl={2}>
            <MovieSkeleton />
        </GridItem>
        <GridItem xs md={4} lg={3} xl={2}>
            <MovieSkeleton />
        </GridItem>
    </Grid>
)

export default MoviesLoading
