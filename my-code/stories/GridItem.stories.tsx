import { Story, Meta } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import Grid from '../components/Grid/Grid'
import GridItem from '../components/GridItem/GridItem'
import Item from './Item'

export default {
    title: 'Grid System/Grid Item',
    component: GridItem,
} as Meta

const Template: Story<ComponentProps<typeof GridItem>> = ({ ...args }) => {
    return (
        <Grid>
            <GridItem {...args}>
                <Item>1180</Item>
            </GridItem>
        </Grid>
    )
}

export const Default = Template.bind({})

Default.args = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2,
}
