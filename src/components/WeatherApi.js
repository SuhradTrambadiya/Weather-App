import React, { useState } from 'react';

const WeatherApi = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Replace 'YOUR_RAPIDAPI_KEY' with your actual RapidAPI key
        const apiKey = 'dfe98162e8msha3dc3885b22d3b3p1f6347jsndecbba527ab7';
        const apiUrl = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
            },
        };

        try {
            const response = await fetch(apiUrl, options);
            const result = await response.json(); // Parse the JSON response
            setWeatherData(result);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="container mt-5 bg-dark text-light p-4">
            <h1 className="mb-4">Weather App</h1>

            <div className="mb-3">
                <label htmlFor="cityInput" className="form-label">
                    Enter City:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="cityInput"
                    value={city}
                    onChange={handleCityChange}
                />
            </div>

            <button className="btn btn-primary mb-3" onClick={fetchData}>
                Fetch Data
            </button>

            {weatherData && (
                <div>
                    <h2 className="mb-3">Weather Data:</h2>
                    <div className="row">

                        <div className="col-md-4 mb-3">
                            <div className="card bg-secondary text-white">
                                <img
                                    src="https://www.leitrimobserver.ie/resizer/1200/700/true/1495723076036_1516614737.jpg--the_weather_forecast_for_saturday__april_6_isn_t_looking_that_bad.jpg?1516614737000"
                                    className="card-img-top img-fluid"
                                    alt="Temperature"
                                    style={{ height: '200px' }}
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Temperature</h5>
                                    <p className="card-text">{weatherData.temp}°C</p>
                                    <p className="card-text">
                                        Feels Like: {weatherData.feels_like}°C
                                    </p>
                                    <p className="card-text">
                                        Min Temperature: {weatherData.min_temp}°C
                                    </p>
                                    <p className="card-text">
                                        Max Temperature: {weatherData.max_temp}°C
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Display humidity card */}
                        <div className="col-md-4 mb-3">
                            <div className="card bg-secondary text-white">
                                <img
                                    src="https://cdn2.iconfinder.com/data/icons/icons-for-android-5-mobile-apps/154/humidity-rain-drop-weather-condition-news-app-512.png"
                                    className="card-img-top img-fluid"
                                    alt="Humidity"
                                    style={{ height: '200px' }}
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Humidity</h5>
                                    <p className="card-text">{weatherData.humidity}%</p>
                                </div>
                            </div>
                        </div>

                        {/* Display wind speed card */}
                        <div className="col-md-4 mb-3">
                            <div className="card bg-secondary text-white">
                                <img
                                    src="https://png.pngtree.com/png-vector/20220119/ourlarge/pngtree-weather-forecast-wind-icon-vector-png-image_4232597.png"
                                    className="card-img-top img-fluid"
                                    alt="Wind"
                                    style={{ height: '200px' }}
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Wind Speed</h5>
                                    <p className="card-text">{weatherData.wind_speed} m/s</p>
                                    <p className="card-text">
                                        Wind Degrees: {weatherData.wind_degrees}°
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherApi;
