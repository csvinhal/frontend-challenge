import { Story, Meta } from '@storybook/react/types-6-0'
import MoviesLoading from '../components/MoviesLoading/MoviesLoading'

export default {
    title: 'Page Components/Movies Loading',
    component: MoviesLoading,
} as Meta

const Template: Story = () => <MoviesLoading />

export const Default = Template.bind({})
