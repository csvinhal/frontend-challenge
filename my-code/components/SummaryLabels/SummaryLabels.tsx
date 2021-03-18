import cx from 'classnames'
import Labels from '../Labels/Labels'
import Typography from '../Typography/Typography'

interface Props {
    className?: string
    runtime: string
    year: string
    rated: string
}

const SummaryLabels = ({ className, runtime, year, rated }: Props) => (
    <div className={cx('movie-label', className)}>
        <Typography element="span" size="medium" color="secundary">
            {runtime}
        </Typography>
        <span className="movie-label__dot" />
        <Typography element="span" size="medium" color="secundary">
            {year}
        </Typography>
        <span className="movie-label__dot" />
        <Labels>{rated}</Labels>

        <style jsx>{`
            .movie-label {
                display: inline-flex;
                align-items: center;
            }

            .movie-label__dot {
                height: 2px;
                width: 2px;
                background-color: var(--theme-color-secundary);
                border-radius: 50%;
                display: inline-block;
                margin: 0 8px;
            }
        `}</style>
    </div>
)

export default SummaryLabels
