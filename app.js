/* CS 361 Project - Image Searcher - Aaron Ducote */

/*
 * SETUP
 */

var express = require('express');
const path = require('path');
PORT = 7600;

var app = express();

const { engine } = require('express-handlebars');
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


/* 
 * ROUTES
 */

// GET ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/CSH', (req, res) => {
    res.sendFile(path.join(__dirname, 'CSH.html'));
});
/*
 * LISTENER
 */

app.listen(PORT, function() {
	console.log("Aaron's Image Searcher being hosted on http://localhost:" + PORT + '; press Ctrl+C to terminate.');
});