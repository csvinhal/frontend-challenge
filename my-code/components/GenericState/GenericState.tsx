import Image from 'next/image'
import Typography from '../Typography/Typography'

interface Props {
    title: string
    subtitle: string
    image: string
}

const GenericState = ({ title, subtitle, image }: Props) => (
    <div className="empty-state">
        <div className="empty-state__img">
            <Image src={image} alt="Empty state image" layout="fill" objectFit="contain" />
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
                height: 260px;
            }

            .empty-state__img {
                position: relative;
                margin-bottom: 16px;
                max-width: 396px;
                max-height: 193px;
                height: 100%;
                width: 100%;
            }

            .empty-state :global(.empty-state__title) {
                margin-bottom: 8px;
            }
        `}</style>
    </div>
)

export default GenericState
