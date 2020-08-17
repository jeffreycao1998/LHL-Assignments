SELECT id, name
FROM students
WHERE cohort_id IN (1, 2, 3)
ORDER BY name;