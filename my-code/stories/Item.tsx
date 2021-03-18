import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Item = ({ children }: Props) => {
    return (
        <div
            style={{
                border: '1px solid white',
                borderColor: 'var(--theme-color-mid-grey)',
                borderRadius: '4px',
                backgroundColor: 'var(--theme-color-light-grey)',
                textAlign: 'center',
                padding: '8px',
            }}
        >
            {children}
        </div>
    )
}

export default Item
