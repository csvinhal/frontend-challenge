import icons from './constants'

export type Icons = keyof typeof icons

interface Props {
    className?: string
    icon: Icons
    width?: string
    height?: string
    viewBox?: string
}

const Icon = ({ className, icon, width, height, viewBox }: Props) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox={viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >
        {icons[icon]}
    </svg>
)

Icon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    viewBox: '0 0 24 24',
}

export default Icon
