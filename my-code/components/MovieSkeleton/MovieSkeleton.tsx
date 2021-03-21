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
                    overflow: hidden;
                }

                .movie-skeleton::after {
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    content: '';
                    position: absolute;
                    transform: translateX(-100%);
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(122, 140, 153, 0.1),
                        transparent
                    );
                    animation: loading 1.5s infinite;
                }

                @keyframes loading {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </div>
    )
}

export default MovieSkeleton
