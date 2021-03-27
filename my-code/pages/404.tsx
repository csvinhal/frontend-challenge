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
                <div className="not-found__description">
                    <Typography
                        className="mb-2"
                        element="h2"
                        size="medium-high"
                        color="secundary"
                    >
                        The page you have requested has flown the coop.
                    </Typography>
                    <Typography
                        className="mb-2"
                        element="span"
                        color="secundary"
                    >
                        Perhaps you are here because:
                        <ul>
                            <li>The page has moved</li>
                            <li>The page no longer exists</li>
                            <li>You like 404 pages</li>
                        </ul>
                    </Typography>
                </div>

                <Button onClick={onClick} aria-label="Go to homepage">
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

                .not-found__description {
                    text-align: left;
                }

                .not-found__description ul {
                    margin-top: 0.5rem;
                    padding-left: 1rem;
                }
            `}</style>
        </div>
    )
}

export default Custom404
