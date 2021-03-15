import { Meta, Story } from '@storybook/react/types-6-0'
import MovieSkeleton from '../components/MovieSkeleton/MovieSkeleton'

export default {
    title: 'Components/Movie Skeleton',
    component: MovieSkeleton,
} as Meta

const Template: Story = () => <MovieSkeleton />

export const Default = Template.bind({})
