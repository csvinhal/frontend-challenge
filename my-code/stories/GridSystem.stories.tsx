import { Story, Meta } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import GridSystem from './GridSystem'
import './GridSystem.css'

export default {
    title: 'Grid System',
    component: GridSystem,
} as Meta

const Template: Story<ComponentProps<typeof GridSystem>> = ({ ...args }) => {
    return <GridSystem {...args}></GridSystem>
}

export const Default = Template.bind({})

Default.args = {}
