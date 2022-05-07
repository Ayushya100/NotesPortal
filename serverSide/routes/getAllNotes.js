const express = require("express");
const app = express();

const Notes = require("../models/notes");

app.get('/', async(req, res) => {
    try {
        const allNotes = await Notes.find();
        res.send(allNotes);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = app;