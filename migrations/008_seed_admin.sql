INSERT INTO users (full_name, email, password_hash, role)
VALUES (
  'Madina Tokhi',
  'madinatokhi4@gmail.com',
  crypt('UCe2M1WLvZ!@2025', gen_salt('bf')),
  'admin'
);
