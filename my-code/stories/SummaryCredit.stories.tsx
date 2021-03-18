import { Meta, Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import SummaryCredit from '../components/SummaryCredit/SummaryCredit'

export default {
    title: 'Page Components/Summary Credit',
    component: SummaryCredit,
} as Meta

const Template: Story<ComponentProps<typeof SummaryCredit>> = ({ ...args }) => (
    <SummaryCredit {...args} />
)

export const Default = Template.bind({})

Default.args = {
    title: 'Cast',
    list: [
        'Jim Carrey',
        'Zooey Deschanel',
        'Bradley Cooper',
        'John Michael Higgins',
    ],
}
