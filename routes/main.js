const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('index', { title: 'LearnLog Home' });
});

// About page route
router.get('/about', (req, res) => {
  res.render('about', { title: 'About LearnLog' });
});

// Display logs from the database
router.get('/logs', (req, res) => {
  const query = 'SELECT * FROM logs';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching logs:', err.message);
      return res.status(500).send('Error fetching logs');
    }
    res.render('logs', { title: 'Learning Logs', logs: results });
  });
});

// Page to add a log
router.get('/add-log', (req, res) => {
  res.render('add-log', { title: 'Add Learning Log' });
});

// Process form submission and insert into database
router.post('/add-log', (req, res) => {
  const { title, description } = req.body;
  const query = 'INSERT INTO logs (title, description) VALUES (?, ?)';
  db.query(query, [title, description], (err) => {
    if (err) {
      console.error('Error adding log:', err.message);
      return res.status(500).send('Error adding log');
    }
    res.redirect('/logs');
  });
});


// Route to render the home page with logs
router.get("/", (req, res) => {
  const query = "SELECT * FROM logs ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching logs: ", err);
      return res.status(500).send("Error fetching logs");
    }
    res.render("index", { logs: results });
  });
});

// Route to handle form submissions for adding logs
router.post("/add-log", (req, res) => {
  const { title, description } = req.body;

  // Basic input validation
  if (!title || !description) {
    return res.status(400).send("Title and description are required.");
  }

  // SQL query to insert data into the logs table
  const query = "INSERT INTO logs (title, description) VALUES (?, ?)";
  db.query(query, [title, description], (err, result) => {
    if (err) {
      console.error("Error adding log: ", err);
      return res.status(500).send("Error adding log");
    }
    console.log("Log added successfully!");
    res.redirect("/"); // Redirect to the home page
  });
});

module.exports = router;
