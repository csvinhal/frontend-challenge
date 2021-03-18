import { Meta, Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import SummaryLabels from '../components/SummaryLabels/SummaryLabels'

export default {
    title: 'Page Components/Summary Labels',
    component: SummaryLabels,
} as Meta

const Template: Story<ComponentProps<typeof SummaryLabels>> = ({ ...args }) => (
    <SummaryLabels {...args} />
)

export const Default = Template.bind({})

Default.args = {
    runtime: '104 min',
    rated: 'PG-13',
    year: '2008',
}
