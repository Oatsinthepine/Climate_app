import { Link } from "react-router-dom";
import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";



const Header = () => {

    const { theme, setTheme } = useTheme();
    // set the default theme to dark
    const currentTheme = theme === "dark";

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2
        supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center justify-between px-4">
                {/* <Link> here is the client side router */}
                <Link to={"/"}>
                {/* use ternary operator to change the logo based on the theme */}
                <img src= {currentTheme ? "/logo.png" : "/logo2.png"}
                alt="Climate App Logo" className="h-14"></img>
                </Link>

                <div>
                {/* search */}
                {/* theme toggle */}
                <div
                    onClick={() => setTheme(currentTheme ? "light" : "dark")}
                    className="flex items-center cursor-pointer relative h-6 w-6"
                >
                    {/* Sun Icon */}
                    <Sun
                        className={`
                            absolute transition-all duration-500
                            ${currentTheme
                                ? "opacity-100 rotate-0"
                                : "opacity-0 rotate-90"}
                            h-6 w-6 text-yellow-500
                        `}
                    />
                    {/* Moon Icon */}
                    <Moon
                        className={`
                            absolute transition-all duration-500
                            ${!currentTheme
                                ? "opacity-100 rotate-0"
                                : "opacity-0 -rotate-90"}
                            h-6 w-6 text-gray-500
                        `}
                    />
                </div>
                </div>
            </div>        
        </header>
    )
}

export default Header;