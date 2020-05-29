const router = require("express").Router();
const getWeather = require("../api/weather").getWeather;

router.get("/", (req, res, next) => {
  const { lat, lon } = req.body;
  getWeather(lat, lon)
    .then(weather => res.json(weather.data))
    .catch(err => next(err));
});

module.exports = router;
