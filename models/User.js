// models/User.js
const pool = require('../config/db');

// Get all users
async function getAll() {
  const res = await pool.query(
    'SELECT id, full_name, email, role, national_id, date_of_birth, created_at FROM users ORDER BY id'
  );
  return res.rows;
}

// Get user by ID
async function getById(id) {
  const res = await pool.query(
    'SELECT id, full_name, email, role, national_id, date_of_birth, created_at FROM users WHERE id = $1',
    [id]
  );
  return res.rows[0];
}

// Get user by email
async function getByEmail(email) {
  const res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return res.rows[0];
}

// Create new user
async function create({ full_name, email, password_hash, national_id, date_of_birth, role }) {
  const res = await pool.query(
    `INSERT INTO users (full_name, email, password_hash, national_id, date_of_birth, role)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, full_name, email, role, national_id, date_of_birth, created_at`,
    [full_name, email, password_hash, national_id, date_of_birth, role]
  );
  return res.rows[0];
}

module.exports = { getAll, getById, getByEmail, create };
