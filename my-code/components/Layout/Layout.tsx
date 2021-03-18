import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import { ReactNode, useCallback, useMemo } from 'react'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

interface Props {
    className?: string
    children: ReactNode
    showBackIcon?: boolean
}

const Layout = ({ className, children, showBackIcon }: Props) => {
    const onClick = useCallback(() => {
        Router.replace('/')
    }, [])

    const routerBack = useMemo(
        () =>
            showBackIcon && (
                <ButtonIcon className="layout__back" onClick={onClick} />
            ),
        [showBackIcon],
    )

    return (
        <div className="layout">
            <header className={className}>
                <nav>
                    {routerBack}
                    <Link href="/" passHref>
                        <a aria-label="What's in">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={111}
                                height={32}
                            />
                        </a>
                    </Link>
                </nav>
            </header>
            <main>
                {routerBack}
                {children}
            </main>
            <style jsx>{`
                .layout {
                    display: block;
                    margin: 24px auto 0 auto;
                    padding: 0 16px;
                    width: 100%;
                }

                nav {
                    display: flex;
                    align-items: center;
                }

                nav :global(.layout__back) {
                    display: block;
                    margin-right: 16px;
                }

                main :global(.layout__back) {
                    display: none;
                }

                @media (min-width: 768px) {
                    .layout {
                        padding: 0 32px;
                    }

                    nav :global(.layout__back) {
                        display: none;
                    }

                    main :global(.layout__back) {
                        display: block;
                    }
                }

                @media (min-width: 1200px) {
                    .layout {
                        max-width: 1180px;
                        padding: 0;
                    }
                }
            `}</style>
        </div>
    )
}

export default Layout
