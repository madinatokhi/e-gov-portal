const pool = require('../config/db');

class Application {
  static async getAll() {
    const result = await pool.query(`
      SELECT a.*, s.name AS service_name, c.full_name AS citizen_name
      FROM applications a
      LEFT JOIN services s ON a.service_id = s.id
      LEFT JOIN citizens c ON a.citizen_id = c.id
      ORDER BY a.submitted_at DESC
    `);
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query(`
      SELECT a.*, s.name AS service_name, c.full_name AS citizen_name
      FROM applications a
      LEFT JOIN services s ON a.service_id = s.id
      LEFT JOIN citizens c ON a.citizen_id = c.id
      WHERE a.id = $1
    `, [id]);
    return result.rows[0];
  }

  static async create({ citizen_id, service_id, status, processed_by }) {
    const result = await pool.query(
      `INSERT INTO applications (citizen_id, service_id, status, processed_by)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [citizen_id, service_id, status || 'pending', processed_by || null]
    );
    return result.rows[0];
  }

  static async update(id, { status, processed_by }) {
    const result = await pool.query(
      `UPDATE applications
       SET status = $1, processed_by = $2
       WHERE id = $3 RETURNING *`,
      [status, processed_by, id]
    );
    return result.rows[0];
  }

  static async remove(id) {
    await pool.query(`DELETE FROM applications WHERE id = $1`, [id]);
    return true;
  }
}

module.exports = Application;
