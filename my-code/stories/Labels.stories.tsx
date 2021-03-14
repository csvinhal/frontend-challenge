import { Story, Meta } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import Labels from '../components/Labels/Labels'

export default {
    title: 'Components/Labels',
    component: Labels,
} as Meta

const Template: Story<ComponentProps<typeof Labels>> = ({ ...args }) => (
    <Labels {...args} />
)

export const Default = Template.bind({})

Default.args = {
    label: '18+',
}