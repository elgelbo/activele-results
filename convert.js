var requestify = require('requestify');
var externalURL= 'http://activele-survey.herokuapp.com/api/results';
const ejs = require('ejs');
var fs = require('fs');
var pdf = require('html-pdf');
var config = require('./config');



requestify.get(externalURL).then(function (response) {
   // Get the raw HTML response body
   var html = response.body; 
   var results = JSON.parse(html);
   var htmlContent = fs.readFileSync(__dirname + '/views/results.ejs', 'utf8');
   var htmlRenderized = ejs.render(htmlContent, {filename: 'results.ejs', results: results});
   pdf.create(htmlRenderized, config).toFile('pathtooutput/generated.pdf', function (err, res) {
      if (err) return console.log(err);
      console.log(res); // { filename: '/pathtooutput/generated.pdf' }
   });
});