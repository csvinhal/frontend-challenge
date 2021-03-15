import { Meta, Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import EmptyState from '../components/EmptyState/EmptyState'

export default {
    title: 'Components/Empty State',
    component: EmptyState,
} as Meta

const Template: Story<ComponentProps<typeof EmptyState>> = ({ ...args }) => (
    <EmptyState {...args} />
)

export const Default = Template.bind({})

Default.args = {
    title: "Don't know what to search?",
    subtitle: "Here's an offer you can't refuse",
}
