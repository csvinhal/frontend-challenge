import { Story, Meta } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import ButtonIcon from '../components/ButtonIcon/ButtonIcon'

export default {
    title: 'Components/Button Icon',
    component: ButtonIcon,
} as Meta

const Template: Story<ComponentProps<typeof ButtonIcon>> = ({ ...args }) => (
    <ButtonIcon {...args} />
)

export const Default = Template.bind({})

export const Hover = Template.bind({})

Hover.parameters = { pseudo: { hover: true } }
