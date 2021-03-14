import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const GridItem = ({ children }: Props) => {
    return (
        <div className="grid-item">
            {children}
            <style jsx>{`
                .grid-item {
                    display: block;
                    margin: 0;
                    flex-grow: 1;
                    max-width: 100%;
                    flex-basis: 0;
                    box-sizing: border-box;
                    padding: 8px;
                }
            `}</style>
        </div>
    )
}

export default GridItem
