function createODMap(center, myGeo) {
  // console.log(JSON.stringify(myGeo));
   var mymap = L.map('flow').setView([
    center[1], center[0]
  ], 9);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 12,
    id: 'mapbox.streets'
  }).addTo(mymap);    


  var oneToManyFlowmapLayer = L.canvasFlowmapLayer(myGeo.details, {
    pathDisplayMode: 'all',
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
  
}