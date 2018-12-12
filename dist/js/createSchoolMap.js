function createSchoolMap(center, schoolGeo) {
  var schoolmap = L.map('schoolMap', {
    maxZoom: 14
  }).setView([
    center[1], center[0]
  ], 9);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    id: 'mapbox.streets'
  }).addTo(schoolmap);
  console.log(schoolGeo);
  
  schoolLayer = L.geoJson(schoolGeo, {
    style: function (feature) {
      if (feature.properties.mode === 1) {
        return {
          radius: 5,
          weight: 1,
          color: 'rgb(166, 206, 227)',
          fillColor: 'rgba(166, 206, 227, 0.6)',
          fillOpacity: 0.6
        };
      }
      else if (feature.properties.mode === 2) {
        return {
          radius: 5,
          weight: 1,
          color: 'rgb(31, 120, 180)',
          fillColor: 'rgba(31, 120, 180, 0.6)',
          fillOpacity: 0.6
        };
      } else if (feature.properties.mode === 3) {
        return {
          radius: 5,
          weight: 1,
          color: 'rgb(51,160,44)',
          fillColor: 'rgba(51,160,44, 0.6)',
          fillOpacity: 0.6
        };
      } else if (feature.properties.mode === 4) {
        return {
          radius: 5,
          weight: 1,
          color: 'rgb(178, 223, 138)',
          fillColor: 'rgba(178, 223, 138, 0.6)',
          fillOpacity: 0.6
        };
      } else if (feature.properties.mode === 5) {
        return {
          radius: 5,
          weight: 1,
          color: 'rgb(251, 154, 153)',
          fillColor: 'rgba(251, 154, 153, 0.6)',
          fillOpacity: 0.6
        };
      } else if (feature.properties.mode === 6) {
        return {
          radius: 5,
          weight: 1,
          color: 'rgb(227, 26, 28)',
          fillColor: 'rgba(227, 26, 28, 0.6)',
          fillOpacity: 0.6
        };
      } else if (feature.properties.mode === 7) {
        return {
          radius: 5,
          weight: 1,
          color: 'rgb(255, 127, 0)',
          fillColor: 'rgba(255, 127, 0, 0.6)',
          fillOpacity: 0.6
        };
      } else if (feature.properties.mode === 8) {
        return {
          radius: 5,
          weight: 1,
          color: 'rgb(253, 191, 111)',
          fillColor: 'rgba(253, 191, 111, 0.6)',
          fillOpacity: 0.6
        };
      } else if (feature.properties.mode === 9) {
        return {
          radius: 5,
          weight: 1,
          color: 'rgb(202, 178, 214)',
          fillColor: 'rgba(202, 178, 214, 0.6)',
          fillOpacity: 0.6
        };
      } else {
        return {
          radius: 5,
          weight: 1,
          color: 'rgb(255, 255, 99)',
          fillColor: 'rgba(255, 255, 255, 0.6)',
          fillOpacity: 0.6
        };
      }
    },
    pointToLayer: function (feature, latlng) {
      return new L.CircleMarker(latlng, { radius: 10, fillOpacity: 1 });
    },
    onEachFeature: function (feature, layer) {
      if (feature.properties.mode === 1) {
        layer.bindPopup(
          '<p style="text-align:center; font-size: 20px; margin: 0;">' + 'Mode: 🚶' + '</p>'
        );
      } else if (feature.properties.mode === 2) {
        layer.bindPopup(
          '<p style="text-align:center; font-size: 20px; margin: 0;">' + 'Mode: 🚴‍️' + '</p>'
        );
      } else if (feature.properties.mode === 3) {
        layer.bindPopup(
          '<p style="text-align:center; font-size: 20px; margin: 0;">' + 'Mode: 🚌 or 🚆' + '</p>'
        );
      } else if (feature.properties.mode === 4) {
        layer.bindPopup(
          '<p style="text-align:center; font-size: 20px; margin: 0;">' + 'Mode: 🙋‍ + 🚗' + '</p>'
        );
      } else if (feature.properties.mode === 5) {
        layer.bindPopup(
          '<p style="text-align:center; font-size: 20px; margin: 0;">' + 'Mode: 🏍️' + '</p>'
        );
      } else if (feature.properties.mode === 6) {
        layer.bindPopup(
          '<p style="text-align:center; font-size: 20px; margin: 0;">' + 'Mode: 🚗 + 👤 + 👥' + '</p>'
        );
      } else
        if (feature.properties.mode === 7) {
          layer.bindPopup(
            '<p style="text-align:center; font-size: 20px; margin: 0;">' + 'Mode: 🚗' + '</p>'
          );
        } else if (feature.properties.mode === 8) {
          layer.bindPopup(
            '<p style="text-align:center; font-size: 20px; margin: 0;">' + 'Mode: 💡 (Combination)' + '</p>'
          );
        } else if (feature.properties.mode === 9) {
          layer.bindPopup(
            '<p style="text-align:center; font-size: 20px; margin: 0;">' + 'Mode: 💪 (Other)' + '</p>'
          );
        } else {
          layer.bindPopup(
            '<p style="text-align:center; font-size: 20px; margin: 0;">' + '🚗' + '</p>'
          );
        }
    }
  });
  schoolmap.addLayer(schoolLayer);
  schoolmap.addLayer(schoolLayer).fitBounds(schoolLayer.getBounds());
}

