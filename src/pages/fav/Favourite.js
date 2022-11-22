import React from 'react'
import './Favourite.css'
const Favourite = () => {
  return (
    <div className="favourite">
      <div className="favourite-section-1">
        <p className="city">6 City added as favourite</p>
        <p className="remove">Remove All</p>
      </div>
      <div className="favourite-section-2">
        <div className="locations">
          <div className="location">
            <div className="location-section-1">

              <p className="location-name">Udupi, Karnataka</p>
              <img src={require('../../assets/images/icon_mostly_sunny_small.png')} alt="" />
            </div>
            <div className="location-section-2">
              <div className="location-section-2-title">
                <p className="location-section-2-degree">31°C</p>
                <p className="location-section-2-desc">Mostly Sunny</p>
              </div>
              <img className="heart" src={require('../../assets/images/icon_favourite_Active.png')} alt="" />
            </div>
          </div>
          <div className="location">
            <div className="location-section-1">

              <p className="location-name">Udupi, Karnataka</p>
              <img src={require('../../assets/images/icon_mostly_sunny_small.png')} alt="" />
            </div>
            <div className="location-section-2">
              <div className="location-section-2-title">
                <p className="location-section-2-degree">31°C</p>
                <p className="location-section-2-desc">Mostly Sunny</p>
              </div>
              <img className="heart" src={require('../../assets/images/icon_favourite_Active.png')} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favourite