const recos = require('./recos');

console.log(recos.features.length)

const agrees = new Array();

recos.features.forEach(el => {
  if (el.properties.type === 'agree') {
    agrees.push(el);
  }
});

module.exports = agrees.length;