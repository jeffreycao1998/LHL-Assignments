const chai = require('chai');
const addClass = require('../js/className');

const assert = chai.assert;

describe('addClass', function() {
  it('should add class to element', function() {
    const element = { className: '' };

    addClass(element, 'test-class');
    
    assert.equal(element.className, 'test-class');
  });

  it('should not add a class which already exists', function() {
    const element = { className: 'exists' };

    addClass(element, 'exists');

    const numClasses = element.className.split(' ').length;
    assert.equal(numClasses, 1);
  });

  it('should append new class after existing one', function() {
    const element = { className: 'exists' };

    addClass(element, 'new-class');

    const classes = element.className.split(' ');
    assert.equal(classes[1], 'new-class');
  })
});