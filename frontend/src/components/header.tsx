import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2
        supports-[backdrop-filter]:bg-background/60">
            <div>
                <Link to={"/"}>
                <img src="/vite.svg" alt="Climate App Logo" className="h-14 w-10"></img>
                </Link>
            </div>
            <div>
                {/* search */}
                {/* theme toggle */}
            </div>
        </header>
    )
}

export default Header;