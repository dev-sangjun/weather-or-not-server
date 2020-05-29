const axios = require("axios");
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const getWeather = (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall`;
  const config = {
    params: {
      lat,
      lon,
      units: "metric",
      exclude: "hourly",
      appid: API_KEY,
    },
  };
  return axios.get(url, config);
};

module.exports = {
  getWeather,
};
