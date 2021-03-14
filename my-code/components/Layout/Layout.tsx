import { ReactNode } from 'react'
import Image from 'next/image'

interface Props {
    className?: string
    children: ReactNode
}

const Layout = ({ className, children }: Props) => {
    return (
        <div className="layout">
            <header>
                <Image src="/logo.png" alt="Logo" width={111} height={32} />
            </header>
            <main className={className}>{children}</main>
            <style jsx>{`
                .layout {
                    display: block;
                    margin: 24px auto 0 auto;
                    padding: 0 16px;
                    width: 100%;
                }

                @media (min-width: 768px) {
                    .layout {
                        padding: 0 32px;
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
