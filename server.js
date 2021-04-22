// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('db'));

// Data
// const notesDB = require('./db/db.json') // Removed notesDB as a global variable because it needs to be reinitialized each time a request is made

// Routes

app.get('/api/notes', (req, res) => {
    const notesDB = require('./db/db.json') // Added json file here as a local variable
    res.json(notesDB)
});

app.post('/api/notes', (req, res) => {
    const notesDB = require('./db/db.json');
    
    notesDB.forEach(obj => obj.id = uuidv4()); // for each object in the array, add uniq id (https://www.w3schools.com/js/js_object_properties.asp)
    
    const newNote = req.body;
    newNote.id = uuidv4(); // Add unique id to the new note
    notesDB.push(newNote);
    
    fs.writeFile('./db/db.json', JSON.stringify(notesDB), err => {})
    
    res.json(newNote); 
})

// app.delete('api/notes/:id', (req, res) => {
    //     const notesDB = require('./db/db.json');
    //     const noteId = req.params.id;
    //     console.log(noteId)
    
    // })

    
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));
   
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
    
    // Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));