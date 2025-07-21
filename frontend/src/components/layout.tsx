
import type { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-gradient-to-br from-background to-muted">
            <header>
                <h1>Header</h1>
            </header>
            <main>
                {children}
            </main>
            footer
        </div>
    )
}

export default Layout