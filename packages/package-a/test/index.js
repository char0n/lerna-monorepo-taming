'use strict';

const assert = require('assert');

const { variable } = require('../src');

describe('package-a', function() {
  specify('should equal package-a', function() {
    assert.strictEqual(variable, 'package-a');
  })
});
