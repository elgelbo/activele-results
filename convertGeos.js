// const fs = require('fs')
// const ogr2ogr = require('ogr2ogr')
var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [102.0, 0.5],
    },
    properties: {area: '51'},
  }],
}

var ogr2ogr = require('ogr2ogr')
var ogr = ogr2ogr(geojson)

ogr.exec(function (er, data) {
  if (er) console.error(er)
  console.log(data)
})
