var fs = require('fs');
const ejs = require('ejs');
var pdf = require('html-pdf');
var axios = require('axios')
const endPoint = 'http://activele-survey.herokuapp.com/api/results'

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
    "contents": '<div style="text-align: center;">ActiveLE Survey Responses</div>'
  },
  "footer": {
    "height": "28mm",
    "contents": {
      first: 'Cover page',
      2: 'Second page', // Any page number is working. 1-based index
      default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: 'Last Page'
    }
  },
  // Rendering options
  "base": "file:///C:/Users/mgelbman/Desktop/node/activeLE-results/src/", // Base path that's used to load files (images, css, js) when they aren't referenced using a host
}

const createPDF = (goods) => {
  pdf.create(goods, options).toFile('./pdf/results.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });
}

const ejsMaker = async (money) => {
  var htmlContent = fs.readFileSync(__dirname + '/views/results.ejs', 'utf8');
  var htmlRenderized = ejs.render(htmlContent, { filename: 'results.ejs', money: money });
  return htmlRenderized;
}

const go = async () => {
  try {
    const response = await axios.get(endPoint);
    const pretty = await ejsMaker(response.data);
    createPDF(pretty);
    // console.log(pretty);
  } catch (error) {
    console.error(error);
  }
}

go();