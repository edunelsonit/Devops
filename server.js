const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Allows your frontend to talk to this backend
app.use(express.json());

// 1. Connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',     // Replace with your MySQL user
    password: '',   // Replace with your MySQL password
    database: 'learning_db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

// 2. Create an API endpoint to get users
app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results); // Send the data to frontend as JSON
    });
});

// 3. Start the backend server
app.listen(3000, () => {
    console.log('Backend server running on http://localhost:3000');
});