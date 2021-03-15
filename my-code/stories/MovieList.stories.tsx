import { Meta, Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import MovieList from '../components/MovieList/MovieList'

const movies = [
    {
        title: 'The Old Guard',
        imdb: 'The Old Guard',
        year: '2020',
        poster:
            'https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg',
    },
    {
        title: 'The Guard',
        imdb: 'The Guard',
        year: '2011',
        poster:
            'https://m.media-amazon.com/images/M/MV5BMTY2ODkzMDgwM15BMl5BanBnXkFtZTcwMDA1Mjg1OA@@._V1_SX300.jpg',
    },
    {
        title: 'The Crossing Guard',
        imdb: 'The Crossing Guard',
        year: '1995',
        poster:
            'https://m.media-amazon.com/images/M/MV5BMjkwNWMyZjQtNmU5MS00ZWE1LWE3NzMtNGZjNTlhYzcwNjIzXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg',
    },
    {
        title: 'On Guard',
        imdb: 'On Guard',
        year: '1997',
        poster:
            'https://m.media-amazon.com/images/M/MV5BNTBjY2M0ZjYtYjYxZC00NjhiLWIxZWUtOTc5YTU1NTlmMDNlXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg',
    },
    {
        title: 'The Coast Guard',
        imdb: 'The Coast Guard',
        year: '2002',
        poster:
            'https://m.media-amazon.com/images/M/MV5BMTA0ODk2NDU0NjBeQTJeQWpwZ15BbWU3MDUxMjQwMzE@._V1_SX300.jpg',
    },
    {
        title: 'The Royal Guard',
        imdb: 'The Royal Guard',
        year: '2007',
        poster:
            'https://m.media-amazon.com/images/M/MV5BM2FiM2YzMGMtNzhhZS00N2E3LWI3MDEtNzAxODIxNWY5ZTkzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    },
]

export default {
    title: 'Page Components/Movie List',
    component: MovieList,
} as Meta

const Template: Story<ComponentProps<typeof MovieList>> = ({ ...args }) => (
    <MovieList {...args} />
)

export const Default = Template.bind({})

Default.args = {
    movies,
}
