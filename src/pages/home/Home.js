import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className="home">
            <div className="home-section-1">
                <p className="location">Udupi, Karnataka</p>
                <div className="add-fav">
                    <img src={require('../../assets/images/icon_favourite.png')} alt="favourite" />
                    <p className="fav-title">Add to favourite</p>
                </div>
            </div>
            <div className="home-section-2">
                <img src={require('../../assets/images/icon_mostly_sunny.png')} alt="weather" />
                <div className="temperature">
                    <p className="degree">87</p>
                    <div className="toggle">
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>
                <p className='detail-weather'>Mostly Sunny</p>
            </div>

            <div className="home-section-3">
                <div className="temp-parameters">
                    <div className="parameter">
                        <img src={require('../../assets/images/icon_temperature_info.png')} alt="" />
                        <div className="temp-value">
                            <p>Min-Max</p>
                            <p>75°-90°</p>
                        </div>
                    </div>
                    <div className="parameter">
                        <img src={require('../../assets/images/icon_precipitation_info.png')} alt="" />
                        <div className="temp-value">
                            <p>Precipitation</p>
                            <p>0%</p>
                        </div>
                    </div>
                    <div className="parameter">
                        <img src={require('../../assets/images/icon_humidity_info.png')} alt="" />
                        <div className="temp-value">
                            <p>Humidity</p>
                            <p>47%</p>
                        </div>
                    </div>
                    <div className="parameter">
                        <img src={require('../../assets/images/icon_wind_info.png')} alt="" />
                        <div className="temp-value">
                            <p>Wind</p>
                            <p>4 mph</p>
                        </div>
                    </div>
                    <div className="parameter">
                        <img src={require('../../assets/images/icon_visibility_info.png')} alt="" />
                        <div className="temp-value">
                            <p>Visibility</p>
                            <p>12 mph</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home