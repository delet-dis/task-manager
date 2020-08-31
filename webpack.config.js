/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  mode: `developement`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  }
};
