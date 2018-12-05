const ejs = require('ejs')
var fs = require('fs');
var pdf = require('html-pdf');
var config = require('./config')


exports.format = async (results) => {
  console.log(results);
  var htmlContent = fs.readFileSync(__dirname + '/views/results.ejs', 'utf8');
  var htmlRenderized = ejs.render(htmlContent, {filename: 'results.ejs', results: results});  // console.log(htmlRenderized);
  pdf.create(htmlRenderized, config).toFile('pathtooutput/generated.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/pathtooutput/generated.pdf' }
 });
}

