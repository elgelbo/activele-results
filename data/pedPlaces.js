const peds = require('./pedReco')

const counts = new Array();

var distinct = [...new Set(peds.features.map(x => x.properties.place))]


distinct.forEach(pl => {
  var numOfTrue = 0;
  for (var i = 0; i < peds.features.length; i++) {
    if (peds.features[i].properties.place === pl)
      numOfTrue++;
  }
  counts.push({"name": pl, "count": numOfTrue})
});

module.exports = counts.sort((a, b) => (a.count > b.count) ? 1 : -1).reverse();