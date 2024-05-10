import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import { useEffect, useState } from "react";
import  { Toaster } from 'react-hot-toast';

const Root = () => {
    const localTheme = JSON.parse(localStorage.getItem('theme'))
    const [theme, setTheme] = useState(localTheme)
    localStorage.setItem('theme', theme)
    useEffect(() => {
        localStorage.setItem('theme', theme)

    }, [theme])
    return (
        <div className={`${theme ? 'dark' : ''} dark:bg-dark-primary dark:text-white`}>
            <NavBar theme={theme} setTheme={setTheme} />
            <Outlet />
            <Toaster/>
        </div>
    );
};

export default Root;