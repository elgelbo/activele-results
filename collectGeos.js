var fs = require('fs');
const ogr2ogr = require('ogr2ogr')
const esriResults = require('./helpers/esriResults')
const activity = require('./data/recos');
// const activityCount = require('./data/recosCount');
const pedPlacesCount = require('./data/pedPlaces');
const bikePlacesCount = require('./data/bikePlaces');

function writeFileStream(filePath, data) {
  var writeStream = fs.createWriteStream(filePath, { encoding: 'utf-8', flag: 'w' })
  writeStream.write(data);
  writeStream.on('close', function () {
    console.log('Write stream is closed. ');
  })
}

const go = async () => {
  try {
    const data = {
      esriResults: esriResults,
      activity,
      places: {
        "ped": pedPlacesCount,
        "bike": bikePlacesCount
      }
    };
    // console.log(activity);
    // writeFileStream('./pedRecos.geojson', JSON.stringify(data.places.ped));
    var shapefile = ogr2ogr('/path/to/spatial/file.geojson')
                    .project('EPSG:26946', 'EPSG:4326 ')
                    .format('ESRI Shapefile')
                    .stream()
shapefile.pipe(fs.createWriteStream('/shapefile.zip'))
  } catch (error) {
    console.error(error);
  }
}

go();