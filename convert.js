var fs = require('fs');
const ejs = require('ejs');
var pdf = require('html-pdf');
var axios = require('axios')
const endPoint = 'http://activele-survey.herokuapp.com/api/results'
const summary = require('./summary');
const singleOptions = require('./config/pdfOptions_single')
const summaryOptions = require('./config/pdfOptions_single')
const questions = require('./config/survey_eng')


function writeFileStream(filePath, data) {

  var writeStream = fs.createWriteStream(filePath, {encoding:'utf-8', flag:'w'})
  
  writeStream.write(data);
  
  writeStream.on('close', function () {
      console.log('Write stream is closed. ');
  })
}

const createPDF = (goods) => {
  pdf.create(goods, singleOptions).toFile('./pdf/summary.pdf', function (err, res) {
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
    var htmlContent = fs.readFileSync(__dirname + '/views/summary.ejs', 'utf8');
    var htmlRenderized = ejs.render(htmlContent, { filename: 'summary.ejs', surveys: money.surveys, summary: clean, questions: questions });
    writeFileStream('./dist/index.html', htmlRenderized);
    return htmlRenderized;
  }

  
const go = async () => {
  try {
    const response = await axios.get(endPoint);
    const clean = summary.pipeline(response.data.surveys);
    // const prettySingle = await ejsSingle(response.data, questions);
    const prettySummary = await ejsSummary(response.data, clean, questions);
    // createPDF(prettySingle);
    createPDF(prettySummary);
  } catch (error) {
    console.error(error);
  }
}

go();