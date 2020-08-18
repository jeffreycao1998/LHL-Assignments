INSERT INTO users (name, email, password)
VALUES ('Jeff', 'jeffreycao2020@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES (2020-08-23, 2020-08-26, 1, 1);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (1, 1, 1, 5, 'good');

INSERT INTO properties (
	owner_id,
	title,
	description,
	thumbnail_photo_url,
	cover_photo_url,
	cost_per_night,
	parking_spaces,
	number_of_bathrooms,
	number_of_bedrooms,
	country,
	street,
	city,
	province,
	post_code,
	active
)
VALUES (
  1,
  'Nice House',
  'very nice house',
  'https://imgur.com/s123fgdf5',
  'https://imgur.com/6g7sqdf35',
  44444,
  4,
  4,
  4,
  'Canada',
  'Potato Skin Drive',
  'Toronto',
  'Ontario',
  'L3T6B2',
  TRUE
);