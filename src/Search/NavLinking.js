import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
const NavLinking = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">FetchMovie</NavLink></li>
                    <li><NavLink to="/watchlist">WatchList</NavLink></li>
                    <li><NavLink to="/watched">Watched</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavLinking ;
