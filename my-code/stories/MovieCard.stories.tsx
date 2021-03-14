import { Story, Meta } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import MovieCard from '../components/MovieCard/MovieCard'

export default {
    title: 'Movie Card',
    component: MovieCard,
} as Meta

const args = {
    href: 'https://g.co/kgs/DDhxQi',
    srcImg:
        'https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg',
    title: 'What we do in the shadows',
    year: 2018,
    favorite: false,
}

const Template: Story<ComponentProps<typeof MovieCard>> = ({ ...args }) => (
    <MovieCard {...args} />
)

export const Default = Template.bind({})

Default.args = { ...args }

export const Hover = Template.bind({})

Hover.parameters = { pseudo: { hover: true } }

Hover.args = { ...args }

export const AddFavorites = Template.bind({})

AddFavorites.args = { ...args, favorite: true }
