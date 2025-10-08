-- Seed Citizens
INSERT INTO citizens (full_name, email, password_hash, national_id, date_of_birth)
VALUES
  ('Alice Khan', 'alice@example.com', '$2a$10$wzYkTh36xF9o9Zwn9h3XCeU0VwL14P6d2ZfK9yJ3A7f9yR5jLZ3bK', 'AF1000001', '1995-01-15'),
  ('Bilal Noor', 'bilal@example.com', '$2a$10$wzYkTh36xF9o9Zwn9h3XCeU0VwL14P6d2ZfK9yJ3A7f9yR5jLZ3bK', 'AF1000002', '1998-06-21'),
  ('Madina Tokhi', 'madina@example.com', '$2a$10$wzYkTh36xF9o9Zwn9h3XCeU0VwL14P6d2ZfK9yJ3A7f9yR5jLZ3bK', 'AF1000003', '2002-05-23');

-- Seed Admins
INSERT INTO admins (full_name, email, password_hash, role)
VALUES
  ('Admin User', 'admin@example.com', '$2a$10$wzYkTh36xF9o9Zwn9h3XCeU0VwL14P6d2ZfK9yJ3A7f9yR5jLZ3bK', 'superadmin'),
  ('Officer One', 'officer1@example.com', '$2a$10$wzYkTh36xF9o9Zwn9h3XCeU0VwL14P6d2ZfK9yJ3A7f9yR5jLZ3bK', 'officer');

-- Seed Services
INSERT INTO services (name, description, fee)
VALUES
  ('Passport Application', 'Apply for a new or renewed passport', 500.00),
  ('National ID Card', 'Get a new or replacement ID card', 200.00),
  ('Driver License', 'Apply or renew driver license', 300.00);
