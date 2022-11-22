import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Favourite from './pages/fav/Favourite'
import Home from './pages/home/Home'
import RecentSearch from './pages/recentsearch/RecentSearch'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/fav' element={<Favourite/>} />
        <Route path='/search' element={<RecentSearch/>} />
      </Routes>
    </div>
  )
}

export default App