import Image from 'next/image'
import { HTMLAttributes } from 'react'
import Typography from '../Typography/Typography'

interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string
    subtitle: string
    image: string
}

const GenericState = ({ title, subtitle, image, ...others }: Props) => (
    <div className="empty-state" {...others}>
        <div className="empty-state__img">
            <Image
                src={image}
                alt="Empty state image"
                layout="fill"
                objectFit="contain"
            />
        </div>

        <Typography className="empty-state__title" size="medium">
            {title}
        </Typography>
        <Typography color="secundary">{subtitle}</Typography>
        <style jsx>{`
            .empty-state {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 16.25rem;
            }

            .empty-state__img {
                position: relative;
                margin-bottom: 1rem;
                max-width: 24.75rem;
                max-height: 12.063rem;
                height: 100%;
                width: 100%;
            }

            .empty-state :global(.empty-state__title) {
                margin-bottom: 0.5rem;
            }
        `}</style>
    </div>
)

export default GenericState
