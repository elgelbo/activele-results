var fs = require('fs');
const ejs = require('ejs');
var axios = require('axios')
const endPoint = 'http://activele-survey.herokuapp.com/api/results'
const summary = require('./summary');
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

const ejsAssemble = async (esriResults, clean) => {
  var htmlContent = await fs.readFileSync(__dirname + '/views/index.ejs', 'utf8');
  var htmlRenderized = await ejs.render(htmlContent, { filename: __dirname + '/views/partials/map.ejs', mapIndiv: __dirname + '/views/partials/mapComments.ejs', filename2: __dirname + '/views/partials/textSummary.ejs', esriResults: esriResults, summary: clean });
  writeFileStream('./dist/index.html', htmlRenderized);
  // return htmlRenderized;
  pdf.create(htmlRenderized, mapOptions).toFile('./pdf/summary2.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res);
  });
}

const go = async () => {
  try {
    const response = await axios.get(endPoint);
    const clean = summary.pipeline(response.data.surveys);
    ejsAssemble(esriResults, clean);
  } catch (error) {
    console.error(error);
  }
}

go();