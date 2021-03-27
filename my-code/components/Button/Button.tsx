import cx from 'classnames'
import {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    forwardRef,
    ReactNode,
} from 'react'

interface Props
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: ReactNode
}

const Button = forwardRef<HTMLButtonElement, Props>(
    // eslint-disable-next-line react/prop-types
    ({ className, children, ...others }, ref) => (
        <button className={cx('button', className)} {...others} ref={ref}>
            {children}
            <style jsx>{`
                .button {
                    display: block;
                    border: none;
                    padding: 0.5rem;
                    background-color: transparent;
                    outline: none;
                    cursor: pointer;
                    border: 1px solid var(--theme-color-secundary);
                    border-radius: var(--theme-border-radius);
                    transition: all 0.3s ease;
                }

                .button:focus {
                    border: 1px solid var(--theme-color-white);
                    box-shadow: var(--theme-box-shadow);
                }

                .button:hover {
                    border: 1px solid var(--theme-color-white);
                }
            `}</style>
        </button>
    ),
)

Button.displayName = 'Button'

export default Button
