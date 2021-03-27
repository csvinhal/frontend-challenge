import cx from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'
import Icon from '../Icon/Icon'

type Props = InputHTMLAttributes<HTMLInputElement>

const SearchBar = forwardRef<HTMLInputElement, Props>((props: Props, ref) => (
    <form
        className={cx('search-bar', {
            'search-bar--disabled': props.disabled,
        })}
    >
        <Icon
            className="search-bar__icon"
            icon="magnifier"
            width="1rem"
            height="1rem"
            viewBox="0 0 16 16"
        />
        <label className="search-bar__label" htmlFor="search-bar">
            {props.placeholder}
        </label>
        <input
            id="search-bar"
            className="search-bar__input"
            {...props}
            ref={ref}
        />
        <style jsx>{`
            .search-bar {
                display: flex;
                align-items: center;
                padding: 0.75rem;
                background-color: var(--theme-color-white);
                border-radius: 0.25rem;
            }

            .search-bar:focus-within {
                box-shadow: var(--theme-box-shadow);
            }

            .search-bar :global(.search-bar__icon) {
                color: var(--theme-color-light-grey);
                margin-right: 0.75rem;
            }

            .search-bar__label {
                display: none;
            }

            .search-bar .search-bar__input {
                width: 100%;
                outline: none;
                border: none;
                font-size: var(--theme-font-size-regular);
            }

            .search-bar--disabled {
                background-color: var(--theme-color-disabled);
            }

            .search-bar--disabled .search-bar__input {
                background-color: var(--theme-color-disabled);
            }

            input::placeholder {
                color: var(--theme-color-light-grey);
            }

            input:-ms-input-placeholder {
                color: var(--theme-color-light-grey);
            }

            input::-ms-input-placeholder {
                color: var(--theme-color-light-grey);
            }
        `}</style>
    </form>
))

SearchBar.displayName = 'SearchBar'

export default SearchBar
