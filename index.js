// Import required modules
const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql2');
const path = require('path');

// Create the Express application
const app = express();
const port = 3000;

// Middleware setup
app.set('view engine', 'ejs'); // Set EJS as the templating engine
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Database connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',   // Replace with your MySQL username
  password: 'azabess123', // Replace with your MySQL password
  database: 'learnlog',    // Database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Make the database globally available
global.db = db;

// Routes setup
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// Start the web server
app.listen(port, () => {
  console.log(`LearnLog app is running at http://localhost:${port}`);
});