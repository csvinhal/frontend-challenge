import Icon from '../../Icon/Icon'

const RottenIcon = () => {
    return (
        <div className="rotten-icon">
            <Icon
                icon="rotten"
                viewBox="0 0 16 16"
                width="16px"
                height="16px"
            />
            <style jsx>{`
                .rotten-icon {
                    padding: 0 12px;
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid var(--theme-color-red);
                    background-color: var(--theme-color-red);
                }
            `}</style>
        </div>
    )
}

export default RottenIcon
