import Icon from '../Icon/Icon'

const ButtonIcon = () => {
    return (
        <button className="button">
            <Icon className="button__icon" icon="arrow" />
            <style jsx>{`
                .button {
                    border: none;
                    padding: 8px;
                    background-color: var(--theme-color-dark);
                    outline: none;
                }

                .button__icon {
                    color: #8B93A6;
                }

                .button .button__icon:hover {
                    color: var(--theme-color-white);
                }
            `}</style>
        </button>
    )
}

export default ButtonIcon
