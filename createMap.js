var fs = require('fs');
const ejs = require('ejs');
var pdf = require('html-pdf');
const mapOptions = require('./config/pdfOptions_map')
const esriResults = require('./esriResults')

function writeFileStream(filePath, data) {
  var writeStream = fs.createWriteStream(filePath, { encoding: 'utf-8', flag: 'w' })
  writeStream.write(data);
  writeStream.on('close', function () {
    console.log('Write stream is closed. ');
  })
}

const ejsMap = async (esriResults) => {
  var htmlContent = await fs.readFileSync(__dirname + '/views/map.ejs', 'utf8');
  var htmlRenderized = await ejs.render(htmlContent, { filename: 'map.ejs', esriResults: esriResults });
  writeFileStream('./dist/map.html', htmlRenderized);
  // return htmlRenderized;
  pdf.create(htmlRenderized, mapOptions).toFile('./pdf/map.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res);
  });
}

const go = async () => {
  try {
    ejsMap(esriResults);
  } catch (error) {
    console.error(error);
  }
}

go();