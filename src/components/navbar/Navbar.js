import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [value, onChange] = useState("");

    const [time, onChangeTime] = useState("");
    const date = new Date();



    setInterval(function () {

        today();

    }, 1000);





    setInterval(function () {

        todayTime();

    }, 1000);



    const today = () => {

        onChange(

            `${date.toLocaleString("en-us", {

                weekday: "short",

            })} ${date.getDate()}, ${date.toLocaleString("en-us", {

                month: "short",

            })} ${date.getFullYear()} `

        );

    };



    const todayTime = () => {

        onChangeTime(

            ` ${date.toLocaleString("en-US", {

                hour: "numeric",

                minute: "numeric",

                // second: "numeric",

                hour12: true,

            })}`

        );

    };

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
                    {value}&nbsp;&nbsp;{time}
                </div>
            </div>
        </div>
    )
}

export default Navbar