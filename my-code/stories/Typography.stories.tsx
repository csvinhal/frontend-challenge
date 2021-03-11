import { Story, Meta } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import Typography from '../components/Typography/Typography'

export default {
    title: 'Typograpgy',
    component: Typography,
} as Meta

const Template: Story<ComponentProps<typeof Typography>> = ({ ...args }) => (
    <Typography {...args}>In 1964 Beryl Cook and.</Typography>
)

export const Default = Template.bind({})
