const bikes = require('./bikeReco')

const counts = new Array();

var distinct = [...new Set(bikes.features.map(x => x.properties.place))]

distinct.forEach(pl => {
  var numOfTrue = 0;
  for (var i = 0; i < bikes.features.length; i++) {
    if (bikes.features[i].properties.place === pl)
      numOfTrue++;
  }
  counts.push({"name": pl, "count": numOfTrue})
});

module.exports = counts.sort((a, b) => (a.count > b.count) ? 1 : -1).reverse();