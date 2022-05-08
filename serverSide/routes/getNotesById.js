const express = require('express');
const router = express.Router();

const Notes = require('../models/notes');

router.get('/:id', async(req, res) => {
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

module.exports = router;
