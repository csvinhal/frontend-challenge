import { useRouter } from 'next/router'
import Button from '../components/Button/Button'
import Grid from '../components/Grid/Grid'
import Typography from '../components/Typography/Typography'

const Custom404 = () => {
    const { push } = useRouter()
    const onClick = () => {
        push('/')
    }
    return (
        <div className="not-found">
            <Grid
                className="container"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Typography element="h1" size="bold">
                    404
                </Typography>
                <Typography
                    className="mb-2"
                    element="h2"
                    size="medium-high"
                    color="secundary"
                >
                    Ops! It seems we didn&apos;t find the movie you&apos;re
                    looking for
                </Typography>

                <Button onClick={onClick}>
                    <Typography element="span">Go to homepage</Typography>
                </Button>
            </Grid>
            <style jsx>{`
                .not-found :global(.container) {
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

export default Custom404
