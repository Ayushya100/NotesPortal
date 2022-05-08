const express = require('express');
const router = express.Router();

const Notes = require('../models/notes');

router.get('/', async(req, res) => {
    try {
        const allNotes = await Notes.find();
        res.send(allNotes);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;
