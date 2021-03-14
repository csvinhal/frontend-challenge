import { Story, Meta } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import Grid from '../components/Grid/Grid'
import GridItem from '../components/GridItem/GridItem'
import Item from './Item'

export default {
    title: 'Grid System/Grid',
    component: Grid,
    subcomponents: { GridItem },
} as Meta

const Template: Story<ComponentProps<typeof Grid>> = ({ ...args }) => {
    return (
        <Grid {...args}>
            <GridItem xs={1}>
                <Item>80</Item>
            </GridItem>
            <GridItem xs={1}>
                <Item>80</Item>
            </GridItem>
            <GridItem xs={1}>
                <Item>80</Item>
            </GridItem>
            <GridItem xs={1}>
                <Item>80</Item>
            </GridItem>
            <GridItem xs={1}>
                <Item>80</Item>
            </GridItem>
            <GridItem xs={1}>
                <Item>80</Item>
            </GridItem>
            <GridItem xs={1}>
                <Item>80</Item>
            </GridItem>
            <GridItem xs={1}>
                <Item>80</Item>
            </GridItem>
            <GridItem xs={1}>
                <Item>80</Item>
            </GridItem>
            <GridItem xs={1}>
                <Item>80</Item>
            </GridItem>
            <GridItem xs={1}>
                <Item>80</Item>
            </GridItem>
            <GridItem xs={1}>
                <Item>80</Item>
            </GridItem>
            <GridItem xs={2}>
                <Item>180</Item>
            </GridItem>
            <GridItem xs={2}>
                <Item>180</Item>
            </GridItem>
            <GridItem xs={2}>
                <Item>180</Item>
            </GridItem>
            <GridItem xs={2}>
                <Item>180</Item>
            </GridItem>
            <GridItem xs={2}>
                <Item>180</Item>
            </GridItem>
            <GridItem xs={2}>
                <Item>180</Item>
            </GridItem>
            <GridItem xs={3}>
                <Item>280</Item>
            </GridItem>
            <GridItem xs={3}>
                <Item>280</Item>
            </GridItem>
            <GridItem xs={3}>
                <Item>280</Item>
            </GridItem>
            <GridItem xs={3}>
                <Item>280</Item>
            </GridItem>
            <GridItem xs={4}>
                <Item>380</Item>
            </GridItem>
            <GridItem xs={4}>
                <Item>380</Item>
            </GridItem>
            <GridItem xs={4}>
                <Item>380</Item>
            </GridItem>
            <GridItem xs={6}>
                <Item>580</Item>
            </GridItem>
            <GridItem xs={6}>
                <Item>580</Item>
            </GridItem>
            <GridItem xs>
                <Item>1180</Item>
            </GridItem>
        </Grid>
    )
}

export const Default = Template.bind({})

Default.args = {}
