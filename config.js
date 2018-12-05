 var config = {
    // Export options
    "directory": "/pdf",       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp'
  
    // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html
    "format": "Letter",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    "orientation": "portrait", // portrait or landscape
  
    // Page options
    "border": {
      "top": "0in",            // default is 0, units: mm, cm, in, px
      "right": "1in",
      "bottom": "0in",
      "left": "1in"
    },
  
    "header": {
      "height": "0.5in",
      "contents": '<div style="text-align: center;">ActiveLE Text Message Survey Results</div>'
    },
    "footer": {
      "height": "0.5in",
      "contents": {
        default: '<span style="color: #444;">Page {{page}} of {{pages}}</span>', // fallback value
      }
    },
    // Rendering options
    // "base": "http://activele-survey.herokuapp.com", // Base path that's used to load files (images, css, js) when they aren't referenced using a host
  };  
