import cx from 'classnames'
import Typography from '../Typography/Typography'

interface Props {
    classNames?: string
    label: string
    withLogo?: boolean
}

const Labels = ({ classNames, label, withLogo }: Props) => {
    return (
        <div
            className={cx(
                'labels',
                { 'labels--with-logo': withLogo },
                classNames,
            )}
        >
            <Typography
                className="labels__typography"
                element="span"
                size="medium"
            >
                {label}
            </Typography>
            <style jsx>{`
                .labels {
                    display: inline-flex;
                    padding: 4px 6px;
                    background-color: var(--theme-color-light-grey);
                    border-radius: 4px;
                }

                .labels--with-logo {
                    border-width: 1px 1px 1px 0;
                    border-style: solid;
                    border-color: var(--theme-color-mid-grey)
                }

                .labels--with-logo
                    .labels--withLogo
                    :global(.labels__typography) {
                    color: var(--theme-color-dark);
                }
            `}</style>
        </div>
    )
}

export default Labels
