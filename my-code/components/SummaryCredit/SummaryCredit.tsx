import Typography from '../Typography/Typography'

interface Props {
    className?: string
    title: string
    list: string[]
}

const SummaryCredit = ({ className, title, list }: Props) => {
    return (
        <div className={className}>
            <Typography className="mb-1" color="secundary">
                {title}
            </Typography>
            <ul>
                {list.map(item => (
                    <li key={item}>
                        <Typography>{item.trim()}</Typography>
                    </li>
                ))}
            </ul>

            <style jsx>{`
                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </div>
    )
}

export default SummaryCredit
