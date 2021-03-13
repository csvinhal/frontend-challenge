import cx from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'
import Icon from '../Icon/Icon'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

const SearchBar = forwardRef<HTMLInputElement, Props>((props, ref) => {
    return (
        <form
            className={cx('search-bar', {
                'search-bar--disabled': props.disabled,
            })}
        >
            <Icon
                className="search-bar__icon"
                icon="magnifier"
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
            />
            <input className="search-bar__input" {...props} ref={ref} />
            <style jsx>{`
                .search-bar {
                    display: flex;
                    align-items: center;
                    padding: 12px;
                    background-color: var(--theme-color-white);
                    border-radius: 4px;
                }

                .search-bar :global(.search-bar__icon) {
                    color: var(--theme-color-light-grey);
                    margin-right: 12px;
                }

                .search-bar .search-bar__input {
                    width: 100%;
                    outline: none;
                    border: none;
                }

                .search-bar--disabled {
                    background-color: var(--theme-color-disabled);
                }

                .search-bar :global(.search-bar__icon) {
                    color: var(--theme-color-light-grey);
                    margin-right: 12px;
                }

                .search-bar--disabled .search-bar__input {
                    background-color: var(--theme-color-disabled);
                }

                input::placeholder{
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
    )
})

export default SearchBar
