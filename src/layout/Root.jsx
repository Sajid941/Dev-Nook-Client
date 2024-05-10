import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import { useEffect, useState } from "react";
import background from "../assets/blob-scene-haikei.svg"
import DarkBackground from "../assets/blob-scene-haikei (1).svg"

const Root = () => {
    const localTheme = JSON.parse(localStorage.getItem('theme'))
    const [theme, setTheme] = useState(localTheme)
    localStorage.setItem('theme', theme)
    console.log(theme);
    useEffect(() => {
        localStorage.setItem('theme', theme)

    }, [theme])
    return (
        <div className={`${theme ? 'dark' : ''} dark:bg-dark-primary dark:text-white`}>
            <div className="h-16">
                <NavBar theme={theme} setTheme={setTheme} />
                <img className="" src={theme?DarkBackground:background} alt="" />
            </div>
            <div className="lg:px-20">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;