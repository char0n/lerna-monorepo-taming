'use strict';

const { variable: variableA } = require('package-a');
const { variable: variableB } = require('package-b');

const variable = `${variableA}-${variableB}`;

module.exports = {
  variable,
}
