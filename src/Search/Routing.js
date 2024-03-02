import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Watchlist from './Watchlist';
import Watched from './Watched';
import FetchMovie from './FetchMovie';
const Routing = () => {
    return (
        <>
            <Routes>
                <Route index element={<FetchMovie/>}/>
                <Route path='watchlist' element={<Watchlist />} />
                <Route path='watched' element={<Watched />} />
            </Routes>
        </>
    )
}

export default Routing;
