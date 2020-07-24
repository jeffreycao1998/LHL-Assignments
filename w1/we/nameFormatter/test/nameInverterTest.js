const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', () => {
  it('should return empty string when passed an empty string', () => {
    const inputName = '';
    const outputName = '';
    assert.equal(nameInverter(inputName), outputName);
  });
  it('should return a single name when passed a single name', () => {
    const inputName = 'Jeffrey';
    const outputName = 'Jeffrey';
    assert.equal(nameInverter(inputName), outputName);
  });
  it('should return a single name when passed a single name with extra spaces', () => {
    const inputName = ' name';
    const outputName = 'name';
    assert.equal(nameInverter(inputName), outputName);
  });
  it('should return a last-name, first-name when passed a first and last name', () => {
    const inputName = 'first last';
    const outputName = 'last, first';
    assert.equal(nameInverter(inputName), outputName);
  });
  it('should return a last-name, first-name when passed a first and last-name with extra spaces around the names', () => {
    const inputName = ' first last';
    const outputName = 'last, first';
    assert.equal(nameInverter(inputName), outputName);
  });
  it('should return an empty string when passed a single honorific', () => {
    const inputName = 'Dr. ';
    const outputName = '';
    assert.equal(nameInverter(inputName), outputName);
  });
  it('should return honorific first-name when passed honorific first-name', () => {
    const inputName = 'Dr. first';
    const outputName = 'Dr. first';
    assert.equal(nameInverter(inputName), outputName);
  });
  it('should return a honorific last-name, first-name when passed honorific first-name last-name', () => {
    const inputName = 'Dr. first-name last-name';
    const outputName = 'Dr. last-name, first-name';
    assert.equal(nameInverter(inputName), outputName);
  });
  it('should return a honoroific last-name, first-name when passed honorific first-name last-name', () => {
    const inputName = ' Dr. first-name last-name';
    const outputName = 'Dr. last-name, first-name';
    assert.equal(nameInverter(inputName), outputName);
  });
  it('throw an error when name is undefined', () => {
    assert.throws(nameInverter, 'Error');
  });
});