import cx from 'classnames'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

const Grid = forwardRef<HTMLDivElement, Props>(
    ({ children, ...others }: Props, ref) => (
        <div className={cx('grid')} {...others} ref={ref}>
            {children}
            <style jsx>{`
                .grid {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: stretch;
                    width: calc(100% + 8px);
                    margin: -4px;
                }

                @media (min-width: 576px) {
                    width: calc(100% + 16px);
                    margin: -8px;
                }
            `}</style>
        </div>
    ),
)

Grid.displayName = 'Grid'

export default Grid
