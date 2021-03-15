import { Meta, Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import GenericState from '../components/GenericState/GenericState'

export default {
    title: 'Components/Generic State',
    component: GenericState,
} as Meta

const Template: Story<ComponentProps<typeof GenericState>> = ({ ...args }) => (
    <GenericState {...args} />
)

export const Default = Template.bind({})

Default.args = {
    title: "Don't know what to search?",
    subtitle: "Here's an offer you can't refuse",
    image: '/illustration-empty-state.png',
}
