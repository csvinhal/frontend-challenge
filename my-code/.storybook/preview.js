import * as nextImage from 'next/image'
import '../pages/styles.css'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
        default: 'Dark',
        values: [
            {
                name: 'Dark',
                value: '#0a1014',
            },
        ],
    },
}

Object.defineProperty(nextImage, 'default', {
    configurable: true,
    value: props => {
        return <img {...props} />
    },
})
