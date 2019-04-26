const turf = require('@turf/turf')
const bikes = require('./bikeReco')
const bikeComments = require('./bikeComts')
const ped = require('./pedReco')
const pedComments = require('./pedComts')

// console.log(bikes.features.length);
// console.log(bikeComments.features.length);
// console.log(ped.features.length);
// console.log(pedComments.features.length);

const features = new Array();

bikes.features.forEach(bike => {
  const feature = turf.feature(bike.geometry, {"group": "bike", "type": "agree"})
  features.push(feature);
});

bikeComments.features.forEach(bike => {
  const feature = turf.feature(bike.geometry, {"group": "bike", "type": "comment", "comment": bike.properties.comment})
  features.push(feature);
});

ped.features.forEach(ped => {
  const feature = turf.feature(ped.geometry, {"group": "ped", "type": "agree"})
  features.push(feature);
});

pedComments.features.forEach(ped => {
  const feature = turf.feature(ped.geometry, {"group": "ped", "type": "comment", "comment": ped.properties.comment})
  features.push(feature);
});

const collection = turf.featureCollection(features);

module.exports = collection;