var colors = require('colors');

module.exports = function(e) {
  //throw new Error(e);
  console.log('ERROR '.red + e);
  process.exit(1);
};