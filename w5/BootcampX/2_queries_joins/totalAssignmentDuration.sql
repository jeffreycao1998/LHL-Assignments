SELECT SUM(duration) as total_duration
FROM students 
JOIN assignment_submissions ON students.id = student_id
WHERE name = 'Ibrahim Schimmel';