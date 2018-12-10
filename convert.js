var fs = require('fs');
const ejs = require('ejs');
var pdf = require('html-pdf');
var axios = require('axios')
const endPoint = 'http://activele-survey.herokuapp.com/api/results'
const summary = require('./summary');
const singleOptions = require('./config/pdfOptions_single')
const summaryOptions = require('./config/pdfOptions_summary')
const questions = require('./config/survey_eng')

function writeFileStream(filePath, data) {
  var writeStream = fs.createWriteStream(filePath, { encoding: 'utf-8', flag: 'w' })
  writeStream.write(data);
  writeStream.on('close', function () {
    console.log('Write stream is closed. ');
  })
}

const ejsSingle = async (money, questions) => {
  var htmlContent = await fs.readFileSync(__dirname + '/views/results.ejs', 'utf8');
  var htmlRenderized = await ejs.render(htmlContent, { filename: 'results.ejs', surveys: money, questions: questions });
  writeFileStream('./dist/results.html', htmlRenderized);
  // return htmlRenderized;
  pdf.create(htmlRenderized, singleOptions).toFile('./pdf/results_2018.12.10.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res);
  });
}

const ejsSummary = async (clean) => {
  var htmlContent = await fs.readFileSync(__dirname + '/views/summary.ejs', 'utf8');
  var htmlRenderized = await ejs.render(htmlContent, { filename: 'summary.ejs', summary: clean });
  writeFileStream('./dist/index.html', htmlRenderized);
  // return htmlRenderized;
  pdf.create(htmlRenderized, summaryOptions).toFile('./pdf/summary.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res);
  });
}


const go = async () => {
  try {
    const response = await axios.get(endPoint);
    const notFlag = [];
    const surveys = response.data.surveys;
    surveys.forEach(survey => {
      if (survey.flag != true) {
        notFlag.push(survey);
      }
    });
    // const clean = summary.pipeline(notFlag);
    ejsSingle(notFlag, questions);
    // ejsSummary(clean, questions);
  } catch (error) {
    console.error(error);
  }
}

go();