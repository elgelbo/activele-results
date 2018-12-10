function createHomeMap(center, myGeo) {
  console.log(JSON.stringify(myGeo.features[0]));
   var mymap = L.map('map').setView([
    center[1], center[0]
  ], 9);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox.streets'
  }).addTo(mymap);    

  // var baseGeo = { 
  //   "type": "Feature", 
  //   "properties": { 
  //     "_id": 'abc123', 
  //     "place_name": { "answer": "29456 Rock Point Dr" }, 
  //     "mode": 7, 
  //     "work": [-117.2107, 33.5608], 
  //     "commuteDistance": "14.4" }, 
  //   "geometry": { 
  //     "type": "Point", 
  //     "coordinates": [-117.40609, 33.689904] 
  //   } 
  // };

  var baseGeo = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            109.6091129,
            23.09653465
          ]
        },
        "properties": {
          "origin_id": 238,
          "origin_city": "Hechi",
          "origin_country": "China",
          "origin_lon": 109.6091129,
          "origin_lat": 23.09653465,
          "destination_id": 1,
          "destination_city": "Sarh",
          "destination_country": "Chad",
          "destination_lon": 18.39002966,
          "destination_lat": 9.149969909
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            43.91129,
            40.1
          ]
        },
        "properties": {
          "origin_id": 999,
          "origin_city": "SanDiego",
          "origin_country": "US",
          "origin_lon": -113.25,
          "origin_lat": 32,
          "destination_id": 1,
          "destination_city": "Sarh",
          "destination_country": "Chad",
          "destination_lon": 18.39002966,
          "destination_lat": 9.149969909
        }
      }
    ]
  }

  var oneToManyFlowmapLayer = L.canvasFlowmapLayer(myGeo, {
    pathDisplayMode: 'selection',
    animationStarted: true,
    animationEasingFamily: 'Cubic',
    animationEasingType: 'In',
    animationDuration: 2000
  }).addTo(mymap);
  oneToManyFlowmapLayer.on('click', function(e) {
    if (e.sharedOriginFeatures.length) {
      oneToManyFlowmapLayer.selectFeaturesForPathDisplay(e.sharedOriginFeatures, 'SELECTION_NEW');
    }
    if (e.sharedDestinationFeatures.length) {
      oneToManyFlowmapLayer.selectFeaturesForPathDisplay(e.sharedDestinationFeatures, 'SELECTION_NEW');
    }
  });
  //   homeLayer = L.geoJson(myGeo, {
  //     style: function (feature) {
  //       if (feature.properties.mode === 1) {
  //         return { color: "#31e0a3" };
  //       } else if (feature.properties.mode === 2) {
  //         return { color: "#e05131" };
  //       } else if (feature.properties.mode === 3) {
  //         return { color: "#bb8301" };
  //       } else if (feature.properties.mode === 4) {
  //         return { color: "#aaa329" };
  //       } else if (feature.properties.mode === 5) {
  //         return { color: "#000000" };
  //       } else if (feature.properties.mode === 6) {
  //         return { color: "#45873b" };
  //       } else if (feature.properties.mode === 7) {
  //         return { color: "#BADA33" };
  //       } else if (feature.properties.mode === 8) {
  //         return { color: "#23456a" };
  //       } else if (feature.properties.mode === 9) {
  //         return { color: "#e053a1" };
  //       } else {
  //         return { color: "#9b9fa5" };
  //       }
  //     },
  //   pointToLayer: function (feature, latlng) {
  //     return new L.CircleMarker(latlng, { radius: 10, fillOpacity: 1 });
  //   },
  //     onEachFeature: function (feature, layer) {
  //       layer.bindPopup(
  //         '<p>' + JSON.stringify(feature.properties) + '</p>' + '<p>'
  //       );
  //     }
  //   });
  // mymap.addLayer(homeLayer);
}

