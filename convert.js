var fs = require('fs');
const ejs = require('ejs');
var pdf = require('html-pdf');
var axios = require('axios')
const endPoint = 'http://activele-survey.herokuapp.com/api/results'
const summary = require('./summary');
const singleOptions = require('./config/pdfOptions_single')
const summaryOptions = require('./config/pdfOptions_single')
const questions = require('./config/survey_eng')

var options = {
  // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html
  "format": "Letter",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
  "orientation": "portrait", // portrait or landscape

  // Page options
  "border": {
    "top": "0",            // default is 0, units: mm, cm, in, px
    "right": "1in",
    "bottom": "0in",
    "left": "1in"
  },

  paginationOffset: 1,       // Override the initial pagination number
  "header": {
    "height": "0.75in",
    "contents": '<div style="text-align: right;color: grey; font-size: 10px; font-family: Roboto;">Individual Responses - ActiveLE Text Message</div>'
  },
  "footer": {
    "height": "0.75in",
    "contents": {
      default: '<div style="text-align: right;color: grey; font-size: 10px; font-family: Roboto;">{{page}} of {{pages}}', // fallback value
    }
  },
  // Rendering options
  "base": "file:///C:/Users/mgelbman/Desktop/node/activeLE-results/dist/", // Base path that's used to load files (images, css, js) when they aren't referenced using a host
}

function writeFileStream(filePath, data) {

  var writeStream = fs.createWriteStream(filePath, {encoding:'utf-8', flag:'w'})
  
  writeStream.write(data);
  
  writeStream.on('close', function () {
      console.log('Write stream is closed. ');
  })
}

const createPDF = (goods) => {
  pdf.create(goods, singleOptions).toFile('./pdf/result.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res);
  });
}

const ejsSingle = async (money, questions) => {
  var htmlContent = fs.readFileSync(__dirname + '/views/result.ejs', 'utf8');
  var htmlRenderized = ejs.render(htmlContent, { filename: 'result.ejs', surveys: money.surveys, questions: questions });
  writeFileStream('./dist/results.html', htmlRenderized);
  return htmlRenderized;
}

const ejsSummary = async (money, clean, questions) => {
    var htmlContent = fs.readFileSync(__dirname + '/views/results.ejs', 'utf8');
    var htmlRenderized = ejs.render(htmlContent, { filename: 'results.ejs', surveys: money.surveys, summary: clean, questions: questions });
    writeFileStream('./dist/results.html', htmlRenderized);
    return htmlRenderized;
  }

  
const go = async () => {
  try {
    const response = await axios.get(endPoint);
    const clean = summary.pipeline(response.data.surveys);
    // const prettySingle = await ejsSingle(response.data, questions);
    const prettySummary = await ejsSummary(response.data, clean, questions);
    // createPDF(prettySingle);
    // createPDF(prettySummary);
  } catch (error) {
    console.error(error);
  }
}

go();