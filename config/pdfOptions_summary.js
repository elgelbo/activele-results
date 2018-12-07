const singleResult_PDFoptions = {
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
    "contents": '<div style="text-align: right;color: grey; font-size: 10px; font-family: Roboto;">Summary of Responses - ActiveLE Text Message Survey</div>'
  },
  "footer": {
    "height": "0.75in",
    "contents": {
      default: '<div style="text-align: right;color: grey; font-size: 10px; font-family: Roboto;">{{page}} of {{pages}}', // fallback value
    }
  },
  // Rendering options
  "base": "file:///C:/Users/mgelbman/Desktop/node/activeLE-results/dist/", // Base path that's used to load files (images, css, js) when they aren't referenced using a host
  "type": "pdf"         // only used for types png & jpeg
}

module.exports = singleResult_PDFoptions;