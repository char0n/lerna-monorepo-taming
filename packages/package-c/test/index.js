'use strict';

const assert = require('assert');

const { variable } = require('../src');

describe('package-c', function() {
  specify('should equal package-c', function() {
    assert.strictEqual(variable, 'package-a-package-b');
  })
});
