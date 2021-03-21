import GenericState from '../GenericState/GenericState'

interface Props {
    title: string
    subtitle: string
}

const ErrorState = ({ title, subtitle }: Props) => (
    <GenericState
        id="error-state"
        image="/alert.png"
        title={title}
        subtitle={subtitle}
    />
)

export default ErrorState
