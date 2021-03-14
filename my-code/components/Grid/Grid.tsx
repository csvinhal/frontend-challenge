import { ReactNode } from 'react'
import cx from 'classnames'

export interface Props {
    children: ReactNode
}

const Grid = ({ children }: Props) => {
    return (
        <div className={cx('grid')}>
            {children}
            <style>{`
                .grid {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: stretch;
                    width: calc(100% + 16px);
                    margin: -8px;
                }
            `}</style>
        </div>
    )
}

export default Grid
