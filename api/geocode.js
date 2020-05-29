const axios = require("axios");
const API_KEY = process.env.REACT_APP_MAPBOX_API_KEY;
const getPlaces = city => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`;
  const config = {
    params: {
      types: "place",
      fuzzyMatch: "false",
      access_token: API_KEY,
    },
  };
  return axios.get(url, config);
};

module.exports = {
  getPlaces,
};
