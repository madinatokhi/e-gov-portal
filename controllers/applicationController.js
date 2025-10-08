const Application = require('../models/Application');

async function getAllApplications(req, res) {
  try {
    const applications = await Application.getAll();
    res.json(applications);
  } catch (err) {
    console.error('Error getAllApplications:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getApplicationById(req, res) {
  try {
    const app = await Application.getById(req.params.id);
    if (!app) return res.status(404).json({ message: 'Application not found' });
    res.json(app);
  } catch (err) {
    console.error('Error getApplicationById:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function createApplication(req, res) {
  try {
    const newApp = await Application.create(req.body);
    res.status(201).json(newApp);
  } catch (err) {
    console.error('Error createApplication:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function updateApplication(req, res) {
  try {
    const updated = await Application.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Application not found' });
    res.json(updated);
  } catch (err) {
    console.error('Error updateApplication:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function deleteApplication(req, res) {
  try {
    await Application.remove(req.params.id);
    res.json({ message: 'Application deleted' });
  } catch (err) {
    console.error('Error deleteApplication:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
};
