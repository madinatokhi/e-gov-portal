// index.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const applicationRoutes = require('./routes/applicationRoutes'); // ✅ NEW

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// EJS setup (optional, for future templates)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Example EJS: login page
app.get('/login', (req, res) => {
  return res.render('login');
});

// ✅ API Routes
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/applications', applicationRoutes); // ✅ Added new applications route

// Default route
app.get('/', (req, res) => res.redirect('/login'));

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
