import Icon from '../../Icon/Icon'

const ImdbIcon = () => {
    return (
        <div className="imdb-icon">
            <Icon
                icon="imdb"
                viewBox="0 0 35 16"
                width="2.188rem"
                height="1rem"
            />
            <style jsx>{`
                .imdb-icon {
                    padding: 0 0.5rem;
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid var(--theme-color-yellow);
                    background-color: var(--theme-color-yellow);
                }
            `}</style>
        </div>
    )
}

export default ImdbIcon
