import cx from 'classnames'
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import Icon from '../Icon/Icon'
import Typography from '../Typography/Typography'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    favorite: boolean
}

const FavoriteButton = forwardRef<HTMLButtonElement, Props>(
    // eslint-disable-next-line react/prop-types
    ({ className, children, favorite, ...others }, ref) => (
        <button
            className={cx(
                'button',
                {
                    'button--is-favorite': favorite,
                },
                className,
            )}
            {...others}
            ref={ref}
        >
            <Icon className="button__icon" icon="heart" />
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
                    cursor: pointer;
                }

                .button:hover {
                    color: var(--theme-color-default);
                    border-color: var(--theme-color-red);
                }

                .button--is-favorite,
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
                .button--is-favorite :global(.button__icon) {
                    color: var(--theme-color-white);
                }
            `}</style>
        </button>
    ),
)

FavoriteButton.displayName = 'FavoriteButton'

export default FavoriteButton
