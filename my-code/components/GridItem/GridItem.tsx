import cx from 'classnames'
import { ReactNode } from 'react'

export type GridSize = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export interface Props {
    children: ReactNode
    xs?: boolean | GridSize
    sm?: boolean | GridSize
    md?: boolean | GridSize
    lg?: boolean | GridSize
    xl?: boolean | GridSize
}

const GridItem = ({ children, xs, sm, md, lg, xl }: Props) => {
    return (
        <div
            className={cx('grid-item', {
                [`grid-item-xs-${xs}`]: xs,
                [`grid-item-sm-${sm}`]: sm,
                [`grid-item-sm-${md}`]: md,
                [`grid-item-lg-${lg}`]: lg,
                [`grid-item-xl-${xl}`]: xl,
            })}
        >
            {children}
            <style jsx>{`
                .grid-item {
                    display: block;
                    margin: 0;
                    box-sizing: border-box;
                    padding: 4px;
                }

                .grid-item-xs-true {
                    flex-grow: 1;
                    max-width: 100%;
                    flex-basis: 0;
                }
                .grid-item-xs-1 {
                    flex-grow: 0;
                    max-width: 8.333333%;
                    flex-basis: 8.333333%;
                }
                .grid-item-xs-2 {
                    flex-grow: 0;
                    max-width: 16.666667%;
                    flex-basis: 16.666667%;
                }
                .grid-item-xs-3 {
                    flex-grow: 0;
                    max-width: 25%;
                    flex-basis: 25%;
                }
                .grid-item-xs-4 {
                    flex-grow: 0;
                    max-width: 33.333333%;
                    flex-basis: 33.333333%;
                }
                .grid-item-xs-5 {
                    flex-grow: 0;
                    max-width: 41.666667%;
                    flex-basis: 41.666667%;
                }
                .grid-item-xs-6 {
                    flex-grow: 0;
                    max-width: 50%;
                    flex-basis: 50%;
                }
                .grid-item-xs-7 {
                    flex-grow: 0;
                    max-width: 58.333333%;
                    flex-basis: 58.333333%;
                }
                .grid-item-xs-8 {
                    flex-grow: 0;
                    max-width: 66.666667%;
                    flex-basis: 66.666667%;
                }
                .grid-item-xs-9 {
                    flex-grow: 0;
                    max-width: 75%;
                    flex-basis: 75%;
                }
                .grid-item-xs-10 {
                    flex-grow: 0;
                    max-width: 83.333333%;
                    flex-basis: 83.333333%;
                }
                .grid-item-xs-11 {
                    flex-grow: 0;
                    max-width: 91.666667%;
                    flex-basis: 91.666667%;
                }
                .grid-item-xs-12 {
                    flex-grow: 0;
                    max-width: 100%;
                    flex-basis: 100%;
                }

                @media (min-width: 576px) {
                    .grid-item {
                        display: block;
                        margin: 0;
                        box-sizing: border-box;
                        padding: 8px;
                    }
                    .grid-item-sm-true {
                        flex-grow: 1;
                        max-width: 100%;
                        flex-basis: 0;
                    }
                    .grid-item-sm-1 {
                        flex-grow: 0;
                        max-width: 8.333333%;
                        flex-basis: 8.333333%;
                    }

                    .grid-item-sm-2 {
                        flex-grow: 0;
                        max-width: 16.666667%;
                        flex-basis: 16.666667%;
                    }

                    .grid-item-sm-3 {
                        flex-grow: 0;
                        max-width: 25%;
                        flex-basis: 25%;
                    }

                    .grid-item-sm-4 {
                        flex-grow: 0;
                        max-width: 33.333333%;
                        flex-basis: 33.333333%;
                    }

                    .grid-item-sm-5 {
                        flex-grow: 0;
                        max-width: 41.666667%;
                        flex-basis: 41.666667%;
                    }

                    .grid-item-sm-6 {
                        flex-grow: 0;
                        max-width: 50%;
                        flex-basis: 50%;
                    }
                    .grid-item-sm-7 {
                        flex-grow: 0;
                        max-width: 58.333333%;
                        flex-basis: 58.333333%;
                    }
                    .grid-item-sm-8 {
                        flex-grow: 0;
                        max-width: 66.666667%;
                        flex-basis: 66.666667%;
                    }
                    .grid-item-sm-9 {
                        flex-grow: 0;
                        max-width: 75%;
                        flex-basis: 75%;
                    }
                    .grid-item-sm-10 {
                        flex-grow: 0;
                        max-width: 83.333333%;
                        flex-basis: 83.333333%;
                    }
                    .grid-item-sm-11 {
                        flex-grow: 0;
                        max-width: 91.666667%;
                        flex-basis: 91.666667%;
                    }
                    .grid-item-sm-12 {
                        flex-grow: 0;
                        max-width: 100%;
                        flex-basis: 100%;
                    }
                }

                @media (min-width: 768px) {
                    .grid-item-md-true {
                        flex-grow: 1;
                        max-width: 100%;
                        flex-basis: 0;
                    }
                    .grid-item-md-1 {
                        flex-grow: 0;
                        max-width: 8.333333%;
                        flex-basis: 8.333333%;
                    }

                    .grid-item-md-2 {
                        flex-grow: 0;
                        max-width: 16.666667%;
                        flex-basis: 16.666667%;
                    }

                    .grid-item-md-3 {
                        flex-grow: 0;
                        max-width: 25%;
                        flex-basis: 25%;
                    }

                    .grid-item-md-4 {
                        flex-grow: 0;
                        max-width: 33.333333%;
                        flex-basis: 33.333333%;
                    }

                    .grid-item-md-5 {
                        flex-grow: 0;
                        max-width: 41.666667%;
                        flex-basis: 41.666667%;
                    }

                    .grid-item-md-6 {
                        flex-grow: 0;
                        max-width: 50%;
                        flex-basis: 50%;
                    }
                    .grid-item-md-7 {
                        flex-grow: 0;
                        max-width: 58.333333%;
                        flex-basis: 58.333333%;
                    }
                    .grid-item-md-8 {
                        flex-grow: 0;
                        max-width: 66.666667%;
                        flex-basis: 66.666667%;
                    }
                    .grid-item-md-9 {
                        flex-grow: 0;
                        max-width: 75%;
                        flex-basis: 75%;
                    }
                    .grid-item-md-10 {
                        flex-grow: 0;
                        max-width: 83.333333%;
                        flex-basis: 83.333333%;
                    }
                    .grid-item-md-11 {
                        flex-grow: 0;
                        max-width: 91.666667%;
                        flex-basis: 91.666667%;
                    }
                    .grid-item-md-12 {
                        flex-grow: 0;
                        max-width: 100%;
                        flex-basis: 100%;
                    }
                }

                @media (min-width: 992px) {
                    .grid-item-lg-true {
                        flex-grow: 1;
                        max-width: 100%;
                        flex-basis: 0;
                    }
                    .grid-item-lg-1 {
                        flex-grow: 0;
                        max-width: 8.333333%;
                        flex-basis: 8.333333%;
                    }
                    .grid-item-lg-2 {
                        flex-grow: 0;
                        max-width: 16.666667%;
                        flex-basis: 16.666667%;
                    }
                    .grid-item-lg-3 {
                        flex-grow: 0;
                        max-width: 25%;
                        flex-basis: 25%;
                    }
                    .grid-item-lg-4 {
                        flex-grow: 0;
                        max-width: 33.333333%;
                        flex-basis: 33.333333%;
                    }
                    .grid-item-lg-5 {
                        flex-grow: 0;
                        max-width: 41.666667%;
                        flex-basis: 41.666667%;
                    }
                    .grid-item-lg-6 {
                        flex-grow: 0;
                        max-width: 50%;
                        flex-basis: 50%;
                    }
                    .grid-item-lg-7 {
                        flex-grow: 0;
                        max-width: 58.333333%;
                        flex-basis: 58.333333%;
                    }
                    .grid-item-lg-8 {
                        flex-grow: 0;
                        max-width: 66.666667%;
                        flex-basis: 66.666667%;
                    }
                    .grid-item-lg-9 {
                        flex-grow: 0;
                        max-width: 75%;
                        flex-basis: 75%;
                    }
                    .grid-item-lg-10 {
                        flex-grow: 0;
                        max-width: 83.333333%;
                        flex-basis: 83.333333%;
                    }
                    .grid-item-lg-11 {
                        flex-grow: 0;
                        max-width: 91.666667%;
                        flex-basis: 91.666667%;
                    }
                    .grid-item-lg-12 {
                        flex-grow: 0;
                        max-width: 100%;
                        flex-basis: 100%;
                    }
                }

                @media (min-width: 1200px) {
                    .grid-item-xl-true {
                        flex-grow: 1;
                        max-width: 100%;
                        flex-basis: 0;
                    }
                    .grid-item-xl-1 {
                        flex-grow: 0;
                        max-width: 8.333333%;
                        flex-basis: 8.333333%;
                    }
                    .grid-item-xl-2 {
                        flex-grow: 0;
                        max-width: 16.666667%;
                        flex-basis: 16.666667%;
                    }
                    .grid-item-xl-3 {
                        flex-grow: 0;
                        max-width: 25%;
                        flex-basis: 25%;
                    }
                    .grid-item-xl-4 {
                        flex-grow: 0;
                        max-width: 33.333333%;
                        flex-basis: 33.333333%;
                    }
                    .grid-item-xl-5 {
                        flex-grow: 0;
                        max-width: 41.666667%;
                        flex-basis: 41.666667%;
                    }
                    .grid-item-xl-6 {
                        flex-grow: 0;
                        max-width: 50%;
                        flex-basis: 50%;
                    }
                    .grid-item-xl-7 {
                        flex-grow: 0;
                        max-width: 58.333333%;
                        flex-basis: 58.333333%;
                    }
                    .grid-item-xl-8 {
                        flex-grow: 0;
                        max-width: 66.666667%;
                        flex-basis: 66.666667%;
                    }
                    .grid-item-xl-9 {
                        flex-grow: 0;
                        max-width: 75%;
                        flex-basis: 75%;
                    }
                    .grid-item-xl-10 {
                        flex-grow: 0;
                        max-width: 83.333333%;
                        flex-basis: 83.333333%;
                    }
                    .grid-item-xl-11 {
                        flex-grow: 0;
                        max-width: 91.666667%;
                        flex-basis: 91.666667%;
                    }
                    .grid-item-xl-12 {
                        flex-grow: 0;
                        max-width: 100%;
                        flex-basis: 100%;
                    }
                }
            `}</style>
        </div>
    )
}

export default GridItem
