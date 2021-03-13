import { Story, Meta } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'

export default {
    title: 'Search Bar',
    component: SearchBar,
} as Meta

const Template: Story<ComponentProps<typeof SearchBar>> = ({ ...args }) => (
    <SearchBar {...args} />
)

export const Default = Template.bind({})

Default.args = {
    disabled: false,
    placeholder: 'Search movies...',
}

export const Disabled = Template.bind({})

Disabled.args = {
    disabled: true,
    placeholder: 'Search movies...',
}