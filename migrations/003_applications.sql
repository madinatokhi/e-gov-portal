-- Applications submitted by citizens for services

CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    citizen_id INT NOT NULL REFERENCES citizens(id) ON DELETE CASCADE,
    service_id INT NOT NULL REFERENCES services(id) ON DELETE CASCADE,
    status VARCHAR(50) DEFAULT 'pending', -- pending, approved, rejected
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processed_by INT REFERENCES admins(id)
);
