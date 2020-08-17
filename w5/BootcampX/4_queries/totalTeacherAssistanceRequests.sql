SELECT COUNT(*) as total_assistances, name 
FROM assistance_requests
JOIN teachers ON assistance_requests.teacher_id = teachers.id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY name