import icons from './constants'

export type Icons = keyof typeof icons

interface Props {
    className?: string
    icon: Icons
    width?: string
    height?: string
}

const Icon = ({ className, icon, width, height }: Props) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            {icons[icon]}
        </svg>
    )
}

Icon.defaultProps = {
    width: '22px',
    height: '22px',
}

export default Icon
