import { ReactNode, useMemo } from 'react'
import cx from 'classnames'

type HeadersMapping = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type ElementMapping = HeadersMapping | 'p' | 'span'

/**
 * bold -> 80pt / 0.8 tracking / 88 leading
 * medium-high -> 24pt / 0.2 tracking / 30 leading
 * medium-low -> 20pt / 0.2 tracking / 28 leading
 * regular -> 16pt / 0.16 tracking / 24 leading
 */
type Sizes = 'bold' | 'medium-high' | 'medium' | 'regular'

type Weights = 'bold' | 'medium' | 'regular'

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
    weight?: Weights
    color?: Colors
}

const Typography = ({
    className,
    children,
    element,
    size,
    weight,
    color,
}: Props) => {
    const Component = element ? element : 'p'

    return (
        <Component className={cx('typography', className)}>
            {children}
            <style jsx>{`
                .typography {
                    font-size: var(--theme-font-size-${size});
                    font-weight: var(--theme-font-weight-${weight});
                    color: var(--theme-color-${color});
                }
            `}</style>
        </Component>
    )
}

Typography.defaultProps = {
    element: 'p',
    size: 'regular',
    weight: 'regular',
    color: 'default',
}

export default Typography
