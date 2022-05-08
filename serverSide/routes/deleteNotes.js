const express = require("express");
const app = express();

const Notes = require("../models/notes");

app.delete("/:id", async(req, res) => {
    try {
        const deleteNote = await Notes.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteNote);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = app;