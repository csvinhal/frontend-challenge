import cx from 'classnames'
import Icon from '../Icon/Icon'
import Typography from '../Typography/Typography'

interface Props {
    favorite: boolean
    href: string
    title: string
    year: string
    srcImg: string
}

const MovieCard = ({ favorite, href, srcImg, title, year }: Props) => {
    return (
        <a className="movie-card" href={href}>
            <img
                className="movie-card__img"
                src={srcImg}
                alt="Picture of the movie"
            />
            {favorite && (
                <Icon className="movie-card__favorite-icon" icon="heart" />
            )}
            <div className="movie-card__overlay">
                <Icon
                    className={cx('overlay__icon', {
                        'overlay__icon--favorite': favorite,
                    })}
                    icon="heart"
                />
                <div className="overlay__text-container">
                    <Typography element="span" size="medium">
                        {title}
                    </Typography>
                    <Typography element="span">{year}</Typography>
                </div>
            </div>
            <style jsx>
                {`
                    .movie-card {
                        display: block;
                        position: relative;
                        border-radius: 4px;
                        width: 180px;
                        height: 240px;
                        overflow: hidden;
                        margin: auto;
                    }

                    .movie-card__img {
                        width: 100%;
                        height: 100%;
                    }

                    .movie-card :global(.movie-card__favorite-icon) {
                        position: absolute;
                        top: 12px;
                        right: 12px;
                        color: var(--theme-color-white);
                    }

                    .movie-card__overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #131c25;
                        display: none;
                        padding: 12px;
                        flex-direction: column;
                        justify-content: space-between;
                    }

                    .movie-card:hover .movie-card__overlay {
                        display: flex;
                        opacity: 0.9;
                        transition: all 0.3s ease;
                    }

                    .movie-card__overlay :global(.overlay__icon) {
                        color: transparent;
                        align-self: flex-end;
                    }

                    .overlay__text-container {
                        display: flex;
                        flex-direction: column;
                    }

                    .movie-card__overlay :global(.overlay__icon--favorite) {
                        color: var(--theme-color-white);
                    }
                `}
            </style>
        </a>
    )
}

export default MovieCard
