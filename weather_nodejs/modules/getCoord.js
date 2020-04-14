const request = require('request');

function getCoords(res, city, callback) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        city
      )}.json?access_token=${process.env.MAPBOX}`
    request({ url: url, json: true }, (error, { body }) => {
        if (error) return console.log(error)

        const [lng, lat] = body.features[0].geometry.coordinates
        console.log(lng, lat)

        callback(res, lng, lat)
    })



}

module.exports = getCoords;