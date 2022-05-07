const express = require("express");
const app = express();

// Adding Models
const Notes = require("../models/notes");

app.post('/', async(req, res) => {
    try {
        const note = new Notes(req.body);
        const createNote = await note.save();
        res.status(201).send(createNote);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = app;