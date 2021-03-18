import cx from 'classnames'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import Icon from '../Icon/Icon'

interface Props extends ButtonHTMLAttributes<HTMLInputElement> {
    className?: string
}

const ButtonIcon = forwardRef<HTMLInputElement, Props>(
    ({ className, ...others }, ref) => (
        <button className={cx('button', className)} {...others} ref={ref}>
            <Icon className="button__icon" icon="arrow" />
            <style jsx>{`
                .button {
                    display: block;
                    border: none;
                    padding: 8px;
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

export default ButtonIcon
