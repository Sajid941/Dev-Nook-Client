import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import { useEffect, useState } from "react";


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
            <NavBar theme={theme} setTheme={setTheme} />
            <Outlet />
        </div>
    );
};

export default Root;