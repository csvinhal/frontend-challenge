import Head from 'next/head'
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
                <ButtonIcon
                    className="layout__back"
                    onClick={onClick}
                    aria-label="Return to home page"
                />
            ),
        [showBackIcon, onClick],
    )

    return (
        <div className="layout">
            <Head>
                <title>What&#39;s in - Movies</title>
                <meta
                    property="og:title"
                    content="What&#39;s in - Movies"
                    key="title"
                />
                <meta name="What&#39;s in App, the best place to find your movies"></meta>
            </Head>
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
                    margin: 1.5rem auto 0 auto;
                    padding: 0 1rem;
                    width: 100%;
                }

                nav {
                    display: flex;
                    align-items: center;
                }

                nav :global(.layout__back) {
                    display: block;
                    margin-right: 1rem;
                }

                main :global(.layout__back) {
                    display: none;
                }

                @media (min-width: 768px) {
                    .layout {
                        padding: 0 2rem;
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
