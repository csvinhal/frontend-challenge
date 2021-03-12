import { ReactNode, useMemo } from 'react'
import cx from 'classnames'

import Typography from '../Typography/Typography'
import Icon, { Icons } from './Icon/Icon'

interface Props {
    children: ReactNode
    favorite: boolean
}

const FavoriteButton = ({ children, favorite }: Props) => {
    return (
        <button className="button">
            <Icon
                className={cx('button__icon', {
                    'icon--is-favorite': favorite,
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

                .button__icon {
                    color: transparent;
                    margin-right: 12px;
                }

                .button:hover .button__icon,
                .button:active .button__icon,
                .icon--is-favorite {
                    color: var(--theme-color-white);
                }
            `}</style>
        </button>
    )
}

export default FavoriteButton
