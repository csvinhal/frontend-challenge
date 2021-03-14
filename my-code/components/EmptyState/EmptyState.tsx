import Typography from '../Typography/Typography'

const EmptyState = () => {
    return (
        <div className="empty-state">
            <img
                className="empty-state__img"
                src="/illustration-empty-state.png"
                alt="Empty state image"
                srcSet={`/illustration-empty-state@2x.png 2x`}
            />
            <Typography className="empty-state__title" size="medium">
                Don't know what to search?
            </Typography>
            <Typography color="secundary">
                Here's an offer you can't refuse
            </Typography>
            <style jsx>{`
                .empty-state {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                .empty-state__img {
                    margin-bottom: 16px;
                    max-width: 396px;
                    max-height: 193px;
                    height: 100%;
                    width: 100%;
                }

                .empty-state :global(.empty-state__title) {
                    margin-bottom: 8px;
                }
            `}</style>
        </div>
    )
}

export default EmptyState
