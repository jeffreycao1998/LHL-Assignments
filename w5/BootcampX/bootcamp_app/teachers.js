const { Pool } = require('pg');

const cohortName = process.argv[2];

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  database: 'bootcampx',
  port: '1234'
});

const values = [`%${cohortName}%`];
const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teacher;
`;

pool.query(queryString, values)
.then(res => {
  for (let query of res.rows) {
    console.log(`${query.cohort}: ${query.teacher}`);
  }
})
.catch(err => console.error('query error', err.stack));