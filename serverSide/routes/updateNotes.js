const express = require("express");
const router = express.Router();

const Notes = require("../models/notes");

router.put("/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        await Notes.findByIdAndUpdate(_id, req.body);
        const updatedNotes = await Notes.findById(_id);
        res.status(201).send(updatedNotes);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;
