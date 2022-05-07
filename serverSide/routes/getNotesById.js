const express = require("express");
const app = express();

const Notes = require("../models/notes");

app.get('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const notesData = await Notes.findById(_id);

        if(!notesData) {
            return res.status(404).send();
        } else {
            res.send(notesData);
        }
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = app;