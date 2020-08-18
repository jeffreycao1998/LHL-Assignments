const { Pool } = require('pg');

const cohortName = process.argv[2];
const limit = process.argv[3];

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  database: 'bootcampx',
  port: '1234'
});

const values = [`%${cohortName}%`, limit];
const queryString = `
SELECT students.id as student_id, students.name as name, cohorts.name as name
FROM students
JOIN cohorts ON cohort_id=cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

pool.query(queryString, values)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));