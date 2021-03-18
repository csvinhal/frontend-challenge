import cx from 'classnames'
import { ReactNode } from 'react'

type HeadersMapping = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type ElementMapping = HeadersMapping | 'p' | 'span'

/**
 * bold -> 80pt / 0.8 tracking / 88 leading
 * medium-high -> 24pt / 0.2 tracking / 30 leading
 * medium-low -> 20pt / 0.2 tracking / 28 leading
 * regular -> 16pt / 0.16 tracking / 24 leading
 */
type Sizes = 'bold' | 'medium-high' | 'medium' | 'regular'

type Colors =
    | 'default'
    | 'secundary'
    | 'active'
    | 'negative'
    | 'highlight'
    | 'disabled'

interface Props {
    className?: string
    children: ReactNode
    element?: ElementMapping
    size?: Sizes
    color?: Colors
}

const Typography = ({ className, children, element, size, color }: Props) => {
    const Component = element ? element : 'p'

    return (
        <Component className={cx('typography', className)}>
            {children}
            <style jsx>{`
                .typography {
                    font-size: var(--theme-font-size-${size});
                    font-weight: var(--theme-font-weight-${size});
                    color: var(--theme-color-${color});
                    line-height: var(--theme-line-height-${size});
                    letter-spacing: var(--theme-letter-spacing-${size});
                }
            `}</style>
        </Component>
    )
}

Typography.defaultProps = {
    element: 'p',
    size: 'regular',
    color: 'default',
}

export default Typography
