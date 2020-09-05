'use strict';

const assert = require('assert');

const { variable } = require('../src');

describe('package-b', function() {
  specify('should equal package-b', function() {
    assert.strictEqual(variable, 'package-b');
  })
});
