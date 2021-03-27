import cx from 'classnames'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'

type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse'

type JustifyContentType =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'

type AlignItemsType =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline'

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    flexDirection?: FlexDirectionType
    flexDirectionSm?: FlexDirectionType
    flexDirectionMd?: FlexDirectionType
    justifyContent?: JustifyContentType
    justifyContentSm?: JustifyContentType
    justifyContentMd?: JustifyContentType
    alignItems?: AlignItemsType
    alignItemsSm?: AlignItemsType
    alignItemsMd?: AlignItemsType
}

const Grid = forwardRef<HTMLDivElement, Props>(
    (
        {
            children,
            flexDirection,
            flexDirectionSm,
            flexDirectionMd,
            justifyContent,
            justifyContentSm,
            justifyContentMd,
            alignItems,
            alignItemsSm,
            alignItemsMd,
            className,
            ...others
        }: Props,
        ref,
    ) => (
        <div
            className={cx('grid', className, {
                'flex-direction-sm': flexDirectionSm,
                'flex-direction-md': flexDirectionMd,
                'justify-content-sm': justifyContentSm,
                'justify-content-md': justifyContentMd,
                'align-items-sm': alignItemsSm,
                'align-items-md': alignItemsMd,
            })}
            {...others}
            ref={ref}
        >
            {children}
            <style jsx>{`
                .grid {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                    flex-direction: ${flexDirection};
                    justify-content: ${justifyContent};
                    align-items: ${alignItems};
                    width: calc(100% + 8px);
                    margin: -4px;
                }

                @media (min-width: 576px) {
                    width: calc(100% + 16px);
                    margin: -8px;

                    .flex-direction-sm {
                        flex-direction: ${flexDirectionSm};
                    }

                    .justify-content-sm {
                        justify-content: ${justifyContentSm};
                    }

                    .align-items-sm {
                        align-items: ${alignItemsSm};
                    }
                }

                @media (min-width: 768px) {
                    .flex-direction-md {
                        flex-direction: ${flexDirectionMd};
                    }

                    .justify-content-md {
                        justify-content: ${justifyContentMd};
                    }

                    .align-items-md {
                        align-items: ${alignItemsMd};
                    }
                }
            `}</style>
        </div>
    ),
)

Grid.displayName = 'Grid'

Grid.defaultProps = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
}

export default Grid
