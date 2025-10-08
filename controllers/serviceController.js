const Service = require('../models/Service');

async function getAllServices(req, res) {
  try {
    const services = await Service.getAll();
    res.json(services);
  } catch (err) {
    console.error('Error getAllServices:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getServiceById(req, res) {
  try {
    const id = req.params.id;
    const service = await Service.getById(id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (err) {
    console.error('Error getServiceById:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function createService(req, res) {
  try {
    const { name, description, department, fee, status } = req.body;
    const service = await Service.create({
      name,
      description,
      department,
      fee,
      status: status || 'active'
    });
    res.status(201).json(service);
  } catch (err) {
    console.error('Error createService:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function updateService(req, res) {
  try {
    const id = req.params.id;
    const { name, description, department, fee, status } = req.body;
    const updated = await Service.update(id, { name, description, department, fee, status });
    if (!updated) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(updated);
  } catch (err) {
    console.error('Error updateService:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function deleteService(req, res) {
  try {
    const id = req.params.id;
    await Service.remove(id);
    res.json({ message: 'Service deleted' });
  } catch (err) {
    console.error('Error deleteService:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { getAllServices, getServiceById, createService, updateService, deleteService };
