import { ReactNode } from 'react'
import Labels from '../Labels/Labels'

interface Props {
    children: ReactNode
    label: string
}

const LabelsWithLogo = ({ children, label }: Props) => {
    return (
        <div className="labels-logo">
            {children}
            <Labels classNames="labels" label={label} withLogo />
            <style jsx>{`
                .labels-logo {
                    display: inline-flex;
                    border-radius: 4px;
                    overflow: hidden;
                }

                .labels-logo :global(.labels) {
                    padding: 8px;
                    background-color: transparent;
                    border-radius: 0 4px 4px 0;
                }
            `}</style>
        </div>
    )
}

export default LabelsWithLogo
