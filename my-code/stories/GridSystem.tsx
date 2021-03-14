import Grid, { Props as GridProps } from '../components/Grid/Grid'
import GridItem from '../components/GridItem/GridItem'
import './GridSystem.css'

const Item = ({ children }) => {
    return (
        <div
            style={{
                border: '1px solid white',
                borderColor: 'var(--theme-color-mid-grey)',
                borderRadius: '4px',
                backgroundColor: 'var(--theme-color-light-grey)',
                textAlign: 'center',
                padding: '8px',
            }}
        >
            {children}
        </div>
    )
}

interface Props extends GridProps {}

const GridSystem = (props: Props) => {
    let sexItems = []
    let twelveItems = []
    for (let i = 0; i < 12; i++) {
        if (i < 6) {
            sexItems.push(
                <GridItem key={i}>
                    <Item>180</Item>
                </GridItem>,
            )
        }
        twelveItems.push(
            <GridItem key={i}>
                <Item>80</Item>
            </GridItem>,
        )
    }

    return (
        <div className="layout">
            <Grid {...props}>{twelveItems}</Grid>
            <Grid {...props}>{sexItems}</Grid>
            <Grid {...props}>
                <GridItem>
                    <Item>280</Item>
                </GridItem>
                <GridItem>
                    <Item>280</Item>
                </GridItem>
                <GridItem>
                    <Item>280</Item>
                </GridItem>
                <GridItem>
                    <Item>280</Item>
                </GridItem>
                <GridItem>
                    <Item>280</Item>
                </GridItem>
            </Grid>
            <Grid {...props}>
                <GridItem>
                    <Item>380</Item>
                </GridItem>
                <GridItem>
                    <Item>380</Item>
                </GridItem>
                <GridItem>
                    <Item>380</Item>
                </GridItem>
            </Grid>
            <Grid {...props}>
                <GridItem>
                    <Item>580</Item>
                </GridItem>
                <GridItem>
                    <Item>580</Item>
                </GridItem>
            </Grid>
            <Grid {...props}>
                <GridItem>
                    <Item>1180</Item>
                </GridItem>
            </Grid>
        </div>
    )
}

export default GridSystem
