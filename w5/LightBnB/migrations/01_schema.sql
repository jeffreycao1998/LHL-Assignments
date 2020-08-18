CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	email VARCHAR(255),
	password VARCHAR(255)
);

CREATE TABLE reservations (
	id SERIAL PRIMARY KEY,
	start_date TIMESTAMP,
	end_date TIMESTAMP,
	property_id INTEGER REFERENCES properties(id) NOT NULL ON DELETE CASCADE,
	guest_id INTEGER REFERENCES users(id) NOT NULL ON DELETE CASCADE
);

CREATE TABLE property_reviews (
	id SERIAL PRIMARY KEY,
	guest_id INTEGER REFERENCES users(id) NOT NULL ON DELETE CASCADE,
	property_id INTEGER REFERENCES properties(id) NOT NULL ON DELETE CASCADE,
	reservation_id INTEGER REFERENCES reservations(id) NOT NULL ON DELETE CASCADE,
	rating SMALLINT NOT NULL,
	message TEXT,
); 

CREATE TABLE properties (
	id SERIAL PRIMARY KEY,
	owner_id INTEGER REFERENCES users(id) NOT NULL ON DELETE CASCADE,
	title VARCHAR(255),
	description TEXT,
	thumbnail_photo_url VARCHAR(255),
	cover_photo_url VARCHAR(255),
	cost_per_night INTEGER,
	parking_spaces INTEGER,
	number_of_bathrooms INTEGER,
	number_of_bedrooms INTEGER,
	country VARCHAR(255),
	street VARCHAR(255),
	city VARCHAR(255),
	province VARCHAR(255),
	post_code VARCHAR(255),
	active BOOLEAN
);