import GenericState from '../GenericState/GenericState'

interface Props {
    title: string
    subtitle: string
}

const ErrorState = ({ title, subtitle }: Props) => (
    <GenericState image="/alert.png" title={title} subtitle={subtitle} />
)

export default ErrorState
