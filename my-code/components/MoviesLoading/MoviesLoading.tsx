import Grid from '../Grid/Grid'
import GridItem from '../GridItem/GridItem'
import MovieSkeleton from '../MovieSkeleton/MovieSkeleton'

const MoviesLoading = () => (
    <Grid
        id="movies-loading"
        justifyContent="center"
        justifyContentMd="flex-start"
    >
        <GridItem>
            <MovieSkeleton />
        </GridItem>
        <GridItem>
            <MovieSkeleton />
        </GridItem>
        <GridItem>
            <MovieSkeleton />
        </GridItem>
        <GridItem>
            <MovieSkeleton />
        </GridItem>
    </Grid>
)

export default MoviesLoading
