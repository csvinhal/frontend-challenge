import cx from 'classnames'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import Icon from '../Icon/Icon'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

const ButtonIcon = forwardRef<HTMLButtonElement, Props>(
    // eslint-disable-next-line react/prop-types
    ({ className, ...others }, ref) => (
        <button className={cx('button', className)} {...others} ref={ref}>
            <Icon className="button__icon" icon="arrow" />
            <style jsx>{`
                .button {
                    display: block;
                    border: none;
                    padding: 0.5rem;
                    background-color: transparent;
                    outline: none;
                    cursor: pointer;
                }

                .button :global(.button__icon) {
                    color: #8b93a6;
                }

                .button:hover :global(.button__icon) {
                    color: var(--theme-color-white);
                }
            `}</style>
        </button>
    ),
)

ButtonIcon.displayName = 'ButtonIcon'

export default ButtonIcon
