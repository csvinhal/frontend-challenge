import { Meta, Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import FavoriteButton from '../components/FavoriteButton/FavoriteButton'

export default {
    title: 'Components/Favorite Button',
    component: FavoriteButton,
} as Meta

const Template: Story<ComponentProps<typeof FavoriteButton>> = ({
    ...args
}) => <FavoriteButton {...args}>Add to favourites</FavoriteButton>

export const Default = Template.bind({})

export const Hover = Template.bind({})

Hover.parameters = { pseudo: { hover: true } }

export const Active = Template.bind({})

Active.parameters = { pseudo: { active: true } }
