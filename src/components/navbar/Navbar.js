import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="section-1">
                <div className="logo">
                    <img src={require('../../assets/images/logo_web.png')} alt="Logo" />
                </div>
                <div className="search">
                    <input type="text" placeholder="Search city" className="search-input" />
                    <img src={require('../../assets/images/icon_search_white.png')} alt="search-icon" />
                </div>
            </div>

            <div className="section-2">
                <div className="links">
                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/fav' >Favourite</NavLink>
                    <NavLink to='/search' >Recent Search</NavLink>
                </div>
                <div className="time">
                    Wed, 28 Nov 2018    11:35 AM
                </div>
            </div>
        </div>
    )
}

export default Navbar