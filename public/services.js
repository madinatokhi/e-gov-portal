document.addEventListener('DOMContentLoaded', loadServices);

async function loadServices() {
  try {
    const response = await fetch('/api/services');
    if (!response.ok) throw new Error('Failed to fetch services');
    
    const services = await response.json();
    const container = document.getElementById('services-container');
    container.innerHTML = '';

    if (services.length === 0) {
      container.innerHTML = '<p>No services available at the moment.</p>';
      return;
    }

    services.forEach(service => {
      const card = document.createElement('div');
      card.className = 'service-card';

      card.innerHTML = `
        <h3>${service.name}</h3>
        <p>${service.description || 'No description provided.'}</p>
        <p><strong>Fee:</strong> ${service.fee ? `$${service.fee}` : 'Free'}</p>
        <button onclick="applyForService(${service.id})">Apply</button>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading services:', error);
  }
}

function applyForService(serviceId) {
  // For now, just a placeholder — later we’ll connect this to Applications & Payments
  alert(`You selected service ID: ${serviceId}. Application feature coming soon!`);
}
