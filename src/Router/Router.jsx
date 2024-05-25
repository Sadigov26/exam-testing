import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Bascet from '../Pages/Bascet/Bascet'
import Wishlist from '../Pages/Wishlist/Wishlist'
import Dashboard from '../Pages/Dashboard/Dashboard'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bascet" element={<Bascet />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/dahsboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Router