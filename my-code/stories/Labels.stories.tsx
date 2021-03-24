import { Meta, Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import Labels from '../components/Labels/Labels'

export default {
    title: 'Components/Labels',
    component: Labels,
} as Meta

const Template: Story<ComponentProps<typeof Labels>> = ({ ...args }) => (
    <Labels {...args}>{}</Labels>
)

export const Default = Template.bind({})

Default.args = {
    children: '18+',
}

const TemplateLogo: Story<ComponentProps<typeof Labels>> = ({ ...args }) => (
    <Labels {...args}>{}</Labels>
)

export const WithLogo = TemplateLogo.bind({})

WithLogo.args = {
    children: '7.7/10',
    logo: 'imdb',
}
