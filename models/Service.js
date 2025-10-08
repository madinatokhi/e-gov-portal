// models/service.js
const pool = require('../config/db');  // or wherever your pg pool is set up

async function getAll() {
  const res = await pool.query('SELECT * FROM services ORDER BY id');
  return res.rows;
}

async function getById(id) {
  const res = await pool.query('SELECT * FROM services WHERE id = $1', [id]);
  return res.rows[0];
}

async function create({ name, description, department, fee, status }) {
  const res = await pool.query(
    `INSERT INTO services (name, description, department, fee, status)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [name, description, department, fee, status]
  );
  return res.rows[0];
}

async function update(id, { name, description, department, fee, status }) {
  const res = await pool.query(
    `UPDATE services
     SET name = $1, description = $2, department = $3, fee = $4, status = $5
     WHERE id = $6
     RETURNING *`,
    [name, description, department, fee, status, id]
  );
  return res.rows[0];
}

async function remove(id) {
  await pool.query('DELETE FROM services WHERE id = $1', [id]);
  return;
}

module.exports = { getAll, getById, create, update, remove };
