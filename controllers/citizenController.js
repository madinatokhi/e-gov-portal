// controllers/citizenController.js
const bcrypt = require('bcryptjs');
const Citizen = require('../models/Citizen');

async function list(req, res) {
  try {
    const rows = await Citizen.getAll();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const citizen = await Citizen.getById(id);
    if (!citizen) return res.status(404).json({ error: 'Not found' });
    res.json(citizen);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function register(req, res) {
  try {
    const { full_name, email, password, national_id, date_of_birth } = req.body;
    if (!full_name || !email || !password || !national_id || !date_of_birth) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    // check existing email
    const existing = await Citizen.getByEmail(email);
    if (existing) return res.status(400).json({ error: 'Email already registered' });

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const created = await Citizen.create({ full_name, email, password_hash, national_id, date_of_birth });

    // don't send password_hash back
    res.status(201).json(created);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { list, getById, register };
