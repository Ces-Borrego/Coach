const express = require('express');

// Import required modules

// Create an instance of Express
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
    // Render the home page with the basketball court
    res.render('home', { title: 'Coaching Tools' });
});

app.get('/scoreboard', (req, res) => {
    // Render the scoreboard page
    res.render('scoreboard', { title: 'Scoreboard' });
});

app.get('/statistics', (req, res) => {
    // Render the statistics manager page
    res.render('statistics', { title: 'Statistics Manager' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});