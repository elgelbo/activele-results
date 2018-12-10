function createHomeMap(center, myGeo) {
  var mymap = L.map('map').setView([
    center[1], center[0]
  ], 9);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox.streets'
  }).addTo(mymap);    
    homeLayer = L.geoJson(myGeo, {
      style: function (feature) {
        if (feature.properties.mode === 1) {
          return { color: "#31e0a3" };
        } else if (feature.properties.mode === 2) {
          return { color: "#e05131" };
        } else if (feature.properties.mode === 3) {
          return { color: "#bb8301" };
        } else if (feature.properties.mode === 4) {
          return { color: "#aaa329" };
        } else if (feature.properties.mode === 5) {
          return { color: "#000000" };
        } else if (feature.properties.mode === 6) {
          return { color: "#45873b" };
        } else if (feature.properties.mode === 7) {
          return { color: "#BADA33" };
        } else if (feature.properties.mode === 8) {
          return { color: "#23456a" };
        } else if (feature.properties.mode === 9) {
          return { color: "#e053a1" };
        } else {
          return { color: "#9b9fa5" };
        }
      },
    pointToLayer: function (feature, latlng) {
      return new L.CircleMarker(latlng, { radius: 10, fillOpacity: 1 });
    },
      onEachFeature: function (feature, layer) {
        layer.bindPopup(
          '<p>' + JSON.stringify(feature.properties) + '</p>' + '<p>'
        );
      }
    });
  mymap.addLayer(homeLayer);
}

