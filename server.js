// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use(express.static('db'))

//Data
const notesDB = require('./db/db.json')

//Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('/api/notes', (req, res) => res.json(notesDB));

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    notesDB.push(newNote);
    res.json(newNote);
})


// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));