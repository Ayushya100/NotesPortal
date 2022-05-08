const express = require("express");
const app = express();

const Notes = require("../models/notes");

app.put("/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        await Notes.findByIdAndUpdate(_id, req.body);
        const updatedNotes = await Notes.findById(_id);
        res.status(201).send(updatedNotes);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = app;