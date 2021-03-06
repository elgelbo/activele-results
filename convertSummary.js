var fs = require('fs');
const ejs = require('ejs');
var axios = require('axios')
const endPoint = 'http://activele-survey.herokuapp.com/api/summary'
const esriResults = require('./helpers/esriResults')
const activity = require('./data/recos');
const activityCount = require('./data/recosCount');
const pedPlacesCount = require('./data/pedPlaces');
const bikePlacesCount = require('./data/bikePlaces');
var pdf = require('html-pdf');
const summaryOptions = require('./config/pdfOptions_summary')


function writeFileStream(filePath, data) {
  var writeStream = fs.createWriteStream(filePath, { encoding: 'utf-8', flag: 'w' })
  writeStream.write(data);
  writeStream.on('close', function () {
    console.log('Write stream is closed. ');
  })
}

const ejsAssemble = async (esriResults, clean) => {
  try {
    ejs.renderFile('./views/index.ejs',
      {
        esriResults: esriResults,
        summary: clean,
        activity,
        activityCount,
        places: {
          "ped": pedPlacesCount,
          "bike": bikePlacesCount
        }
      }, (err, html) => {
        if (err) { throw (err); }
        const fixed = html.replace(/a*(\.\.\/dist\/)/g, '')
        writeFileStream('./dist/index.html', fixed);
        pdf.create(html, summaryOptions).toFile('./pdf/ActiveLE_Summary_20190520.pdf', function (err, res) {
          if (err) return console.log(err);
          console.log(res);
        });
      });
  } catch (error) {
    console.log(error);
  }
}

const go = async () => {
  try {
    const response = await axios.get(endPoint);
    ejsAssemble(esriResults, response.data, );
  } catch (error) {
    console.error(error);
  }
}

go();