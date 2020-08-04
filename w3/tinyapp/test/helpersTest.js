const { assert } = require('chai');

const { 
  generateRandomString, 
  getUserByEmail, 
  urlsForUser
} = require('../helper_functions/helpers');

const testUsers = {
  "userRandomID": {
    id: "userRandomID", 
    email: "user@example.com", 
    password: "purple-monkey-dinosaur"
  },
  "user2RandomID": {
    id: "user2RandomID", 
    email: "user2@example.com", 
    password: "dishwasher-funk"
  }
};

describe('getUserByEmail', () => {
  it('should return a user with valid email', () => {
    const user = getUserByEmail(testUsers, 'user@example.com');
    const expectedOutput = {
      id: "userRandomID", 
      email: "user@example.com", 
      password: "purple-monkey-dinosaur"
    };

    assert.deepEqual(user, expectedOutput);
  });
  it('should return undefined with invalid email', () => {
    const user = getUserByEmail(testUsers, 'sdfsdfds@hotmail.com');

    assert.isUndefined(user);
  });
});