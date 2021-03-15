import { Meta, Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import ErrorState from '../components/ErrorState/ErrorState'

export default {
    title: 'Components/Error State',
    component: ErrorState,
} as Meta

const Template: Story<ComponentProps<typeof ErrorState>> = ({ ...args }) => (
    <ErrorState {...args} />
)

export const Default = Template.bind({})

Default.args = {
    title: 'Ops! Something went wrong.',
    subtitle: 'Movie not found.',
}
