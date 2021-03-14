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
