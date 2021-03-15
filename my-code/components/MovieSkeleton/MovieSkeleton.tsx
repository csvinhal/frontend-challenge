const MovieSkeleton = () => {
    return (
        <div className="movie-skeleton">
            <style jsx>{`
                .movie-skeleton {
                    display: block;
                    position: relative;
                    border-radius: 4px;
                    width: 180px;
                    height: 240px;
                    overflow: hidden;
                    margin: auto;
                    background-color: var(--theme-color-white);
                }

                .movie-skeleton::after {
                    display: block;
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: var(--theme-color-light-grey);
                    animation: loading 1.5s infinite;
                }

                @keyframes loading {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.4;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    )
}

export default MovieSkeleton
