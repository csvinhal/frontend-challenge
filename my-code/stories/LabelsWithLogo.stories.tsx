import { Story, Meta } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'
import ImdbIcon from '../components/LabelsWithLogo/ImdbLogo/ImdbIcon'
import RottenIcon from '../components/LabelsWithLogo/RottenLogo/RottenLogo'
import LabelsWithLogo from '../components/LabelsWithLogo/LabelsWithLogo'

export default {
    title: 'Components/Labels with logo',
    component: LabelsWithLogo,
} as Meta

const Template: Story<ComponentProps<typeof LabelsWithLogo>> = ({
    ...args
}) => (
    <LabelsWithLogo {...args}>
        <ImdbIcon />
    </LabelsWithLogo>
)

export const IMDB = Template.bind({})

IMDB.args = {
    label: '7.6/10',
}

const RottenTemplate: Story<ComponentProps<typeof LabelsWithLogo>> = ({
    ...args
}) => (
    <LabelsWithLogo {...args}>
        <RottenIcon />
    </LabelsWithLogo>
)

export const Rotten = RottenTemplate.bind({})

Rotten.args = {
    label: '96%',
}
