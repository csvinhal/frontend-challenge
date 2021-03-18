import cx from 'classnames'
import { ReactNode } from 'react'
import Icon from '../Icon/Icon'
import Typography from '../Typography/Typography'

interface Props {
    className?: string
    children: ReactNode
    favorite: boolean
}

const FavoriteButton = ({ className, children, favorite }: Props) => (
    <button className={cx('button', className)}>
        <Icon
            className={cx('button__icon', {
                'button__icon--is-favorite': favorite,
            })}
            icon="heart"
        />
        <Typography element="span">{children}</Typography>
        <style jsx>{`
            .button {
                display: flex;
                align-items: center;
                color: var(--theme-color-secundary);
                border: 1px solid var(--theme-color-secundary);
                border-radius: 4px;
                background-color: transparent;
                padding: 12px 16px 12px 12px;
                outline: none;
            }

            .button:hover {
                color: var(--theme-color-default);
                border-color: var(--theme-color-red);
            }

            .button:active {
                color: var(--theme-color-default);
                border-color: var(--theme-color-red);
                background-color: var(--theme-color-red);
            }

            .button :global(.button__icon) {
                color: transparent;
                margin-right: 12px;
            }

            .button:hover :global(.button__icon),
            .button:active :global(.button__icon),
            .button__icon--is-favorite {
                color: var(--theme-color-white);
            }
        `}</style>
    </button>
)

export default FavoriteButton
