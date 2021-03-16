import Icon from '../../Icon/Icon'

const ImdbIcon = () => {
    return (
        <div className="imdb-icon">
            <Icon icon="imdb" viewBox="0 0 35 16" width="35px" height="16px" />
            <style jsx>{`
                .imdb-icon {
                    padding: 8px;
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
