-- migrations/008_create_users.sql
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  national_id VARCHAR(50) UNIQUE,
  date_of_birth DATE,
  role VARCHAR(20) NOT NULL DEFAULT 'citizen', -- 'citizen', 'officer', 'admin'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
