import GenericState from '../GenericState/GenericState'

interface Props {
    title: string
    subtitle: string
}

const EmptyState = ({ title, subtitle }: Props) => (
    <GenericState
        title={title}
        subtitle={subtitle}
        image="/illustration-empty-state.png"
    />
)

export default EmptyState
