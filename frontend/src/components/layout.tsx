import Header from '@/components/header'
import type { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-gradient-to-br from-background to-muted">
            <Header/>
            <main className="min-h-screen conatiner mx-auto px-4 py-8">
            {/* This {children} is where the routed page appears! */}
                {children} 
            </main>
            <footer className = "boarder-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>Just another 🌦️ practice project</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout