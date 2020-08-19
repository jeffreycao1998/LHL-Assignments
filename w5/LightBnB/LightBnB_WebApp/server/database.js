const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg');
const { query } = require('express');

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  database: 'lightbnb',
  port: '1234'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return pool.query(`
  SELECT * FROM users
  WHERE email = $1
  `, [email])
  .then(res => res.rows[0]);
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return pool.query(`
  SELECT * FROM users
  WHERE id = $1`, [id])
  .then(res => res.rows[0]);
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  const { name, email, password } = user;
  const values = [name, email, password];

  return pool.query(`
  INSERT INTO users (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING *;`, values)
  .then(res => res.rows)
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return pool.query(`
  SELECT * FROM reservations
  WHERE guest_id = $1
  LIMIT $2`, [guest_id, limit])
  .then(res => res.rows);
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
  const queryParams = [];

  let queryString = `
  SELECT properties.*, avg(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  `;

  if (options.city) {
    queryParams.push(`%${options.city}%`);

    if (queryString.includes('WHERE')) {
      queryString += `AND city LIKE $${queryParams.length}`;
    } else {
      queryString += `WHERE city LIKE $${queryParams.length}`;
    }
  }

  if (options.owner_id) {
    queryParams.push(Number(options.owner_id));

    if (queryString.includes('WHERE')) {
      queryString += `AND owner_id = $${queryParams.length}`;
    } else {
      queryString += `WHERE owner_id = $${queryParams.length}`;
    }
  }

  if (options.minimum_price_per_night) {
    queryParams.push(Number(options.minimum_price_per_night) * 100);

    if (queryString.includes('WHERE')) {
      queryString += `AND cost_per_night >= $${queryParams.length}`;
    } else {
      queryString += `WHERE cost_per_night >= $${queryParams.length}`;
    }
  }

  if (options.maximum_price_per_night) {
    queryParams.push(Number(options.maximum_price_per_night) * 100);

    console.log(queryString.includes('WHERE'))
    if (queryString.includes('WHERE')) {
      queryString += `AND cost_per_night <= $${queryParams.length}`;
    } else {
      queryString += `WHERE cost_per_night <= $${queryParams.length}`;
    }
  }

  queryString +=`
  GROUP BY properties.id
  `

  if (options.minimum_rating) {
    queryParams.push(Number(options.minimum_rating));

    if (queryString.includes('HAVING')) {
      queryString += `AND avg(property_reviews.rating) >= $${queryParams.length}`;
    }
    queryString += `HAVING avg(property_reviews.rating) >= $${queryParams.length}`;
  }


  queryParams.push(limit);
  queryString += `
  ORDER BY cost_per_night
  LIMIT $${queryParams.length};
  `;

  // console.log(options);
  console.log(queryString, queryParams);

  return pool.query(queryString, queryParams)
  .then(res => res.rows);
}
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const keys = Object.keys(property);
  const values = keys.map(key => {
    if (key === 'cost_per_night') {
      return property[key] * 100;
    }
    return property[key];
  });

  let queryString =`
  INSERT INTO properties (`

  for (let i = 0; i < keys.length; i++) {
    if (i === 0) {
      queryString += `${keys[i]}`;
    } else {
      queryString += `, ${keys[i]}`;
    }
  }

  queryString += ') VALUES (';

  for (let i = 1; i <= keys.length; i++) {
    if (i === 1) {
      queryString += `$${i}`;
    } else {
      queryString += `, $${i}`;
    }
  }

  queryString += ') RETURNING *;'

  return pool.query(queryString, values)
  .then(res => res.rows[0]);
}
exports.addProperty = addProperty;
