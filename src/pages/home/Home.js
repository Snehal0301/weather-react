import React,{useState} from 'react'
import './Home.css'
import Switch from "react-switch";
const Home = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };
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
                        {/* <label class="switch">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label> */}


                        {/* adding switch */}
                        <Switch
                            borderRadius={4}
                            onChange={handleChange}
                            checked={checked}
                            className="react-switch"
                            offColor="transparent"
                            onColor="transparent"
                            uncheckedHandleIcon={
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        fontSize: 18,
                                        color: "red",
                                    }}
                                >
                                    {"\u00B0"}C
                                </div>
                            }
                            uncheckedIcon={
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        fontSize: 18,
                                        paddingRight: 2,
                                        color: "white",
                                        zIndex: "2",
                                    }}
                                >
                                    {"\u00B0"}F
                                </div>
                            }
                            checkedIcon={
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        fontSize: 18,
                                        paddingRight: 2,
                                        color: "white",
                                    }}
                                >
                                    {"\u00B0"}C
                                </div>
                            }
                            checkedHandleIcon={
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        color: "red",
                                        fontSize: 18,
                                    }}
                                >
                                    {"\u00B0"}F
                                </div>
                            }
                        />
                    </div>
                </div>
                <p className='detail-weather'>Mostly Sunny</p>
            </div>

            <div className="home-section-3">
                <div className="temp-parameters">
                    <div className="parameter">
                        <img src={require('../../assets/images/icon_temperature_info.png')} alt="" />
                        <div className="temp-value">
                            <p className="temp-title">Min-Max</p>
                            <p className="temp-data">75°-90°</p>
                        </div>
                    </div>
                    <div className="parameter">
                        <img src={require('../../assets/images/icon_precipitation_info.png')} alt="" />
                        <div className="temp-value">
                            <p className="temp-title">Precipitation</p>
                            <p className="temp-data">0%</p>
                        </div>
                    </div>
                    <div className="parameter">
                        <img src={require('../../assets/images/icon_humidity_info.png')} alt="" />
                        <div className="temp-value">
                            <p className="temp-title">Humidity</p>
                            <p className="temp-data">47%</p>
                        </div>
                    </div>
                    <div className="parameter">
                        <img src={require('../../assets/images/icon_wind_info.png')} alt="" />
                        <div className="temp-value">
                            <p className="temp-title">Wind</p>
                            <p className="temp-data">4 mph</p>
                        </div>
                    </div>
                    <div className="parameter">
                        <img src={require('../../assets/images/icon_visibility_info.png')} alt="" />
                        <div className="temp-value">
                            <p className="temp-title">Visibility</p>
                            <p className="temp-data">12 mph</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home