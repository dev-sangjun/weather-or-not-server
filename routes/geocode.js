const router = require("express").Router();
const getPlaces = require("../api/geocode").getPlaces;

router.get("/:city", (req, res, next) => {
  const { city } = req.params;
  getPlaces(city)
    .then(places => res.send(places.data))
    .catch(err => next(err));
});

module.exports = router;
